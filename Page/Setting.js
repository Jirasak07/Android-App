import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import Fa from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import { BottomSheet } from "react-native-btr";
import { RadioButton } from "react-native-paper";
import axios from "axios";
const windowHeight = Dimensions.get("window").height;
function Setting({ navigation }) {
  const translateYx = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateYx.value };
    })
    .onUpdate((ev) => {
      translateYx.value = ev.translationY + context.value.y;
      translateYx.value = Math.max(translateYx.value, -windowHeight / 1.8);
    })
    .onEnd(() => {
      if (translateYx.value > -windowHeight / 3.5) {
        translateYx.value = withSpring(70);
        runOnJS(updateShare)(true);
      } else {
        translateYx.value = withSpring(-windowHeight / 1.8, { damping: 150 });
      }
    });
  function updateShare(val) {
    setShow(false);
  }
  const subMit = () => {
    if (qty > 0) {
      axios
        .patch("http://192.168.10.226/api/edit/setting", {
          id: id,
          time: qty,
          unit: checked,
        })
        .then((res) => {
          console.log(res.data)
          if (res.status == "200") {
            fethData();
            setShow(!show);
          } else {
            Alert.alert("error");
          }
        });
    }else{
      
      Alert.alert('กรุณากรอกข้อมูลให้ถูกต้อง')
    }
  };
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateYx.value }] };
  });
  const [show, setShow] = useState(false);
  const onPress = async (ev) => {
    translateYx.value = withSpring(-windowHeight / 1.8, { damping: 20 });
    const fetch = await axios.get("http://192.168.10.226/api/show/setting");
    const data = await fetch.data.setting;
    setId(ev);
    setBookMin(data[0]);
    setBookMax(data[1]);
    setPeriodMin(data[2]);
    setPeriodMax(data[3]);
    setChecked(data[ev - 1].unit);
    setSetting(data[ev - 1].name);
    setQty(parseInt(data[ev - 1].time));
    setShow(!show);
  };
  const [qty, setQty] = useState();
  const [textSetting, setSetting] = useState();
  const plus = () => {
    let c = qty + 1;
    setQty(c);
  };
  const minus = () => {
    let c = qty - 1;
    setQty(c);
  };
  const [checked, setChecked] = React.useState("first");
  const [bookMin, setBookMin] = useState({});
  const [bookMax, setBookMax] = useState({});
  const [periodMin, setPeriodMin] = useState({});
  const [periodMax, setPeriodMax] = useState({});
  const [id, setId] = useState();
  const fethData = () => {
    axios.get("http://192.168.10.226/api/show/setting").then((res) => {
      const data = res.data.setting;
      setBookMin(data[0]);
      setBookMax(data[1]);
      setPeriodMin(data[2]);
      setPeriodMax(data[3]);
    });
  };
  useEffect(() => {
    fethData();
  }, []);
  return (
    <View style={styles.constainer}>
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        การตั้งค่าพื้นฐานของระบบ
      </Text>
      <ScrollView style={{ paddingTop: 10 }}>
        <View style={styles.cardContainer}>
          <View
            disabled={false}
            style={[styles.cardSetting, { backgroundColor: "#c7c7ff" }]}
          >
            <MaterialIcons color={"#480ca890"} name="more-time" size={60} />
            <Text
              style={{
                color: "#480ca890",
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {bookMin.name}
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>{bookMin.time}</Text>
              <Text style={styles.inDetail2}>{bookMin.unit_th}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onPress(1);
              }}
              style={[styles.buttonEdit, { backgroundColor: "#a06cd5" }]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                EDIT
              </Text>
              <FontAwesome color={"white"} name="wrench" size={18} />
            </TouchableOpacity>
          </View>
          <View
            disabled={false}
            style={[styles.cardSetting, { backgroundColor: "#ffd8be" }]}
          >
            <MaterialIcons color={"#ff8500"} name="access-time" size={60} />
            <Text
              style={{
                color: "#ff8500",
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {bookMax.name}
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>{bookMax.time}</Text>
              <Text style={styles.inDetail2}>{bookMax.unit_th}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onPress(2);
              }}
              style={[styles.buttonEdit, { backgroundColor: "#f4845f" }]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                EDIT
              </Text>
              <FontAwesome color={"white"} name="wrench" size={18} />
            </TouchableOpacity>
          </View>
          <View
            disabled={false}
            style={[styles.cardSetting, { backgroundColor: "#a9ecbf" }]}
          >
            <Fa color={"#368f8b"} name="clock-start" size={60} />
            <Text
              style={{ color: "#368f8b", fontSize: 18, fontWeight: "bold" }}
            >
              {periodMin.name}
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>{periodMin.time}</Text>
              <Text style={styles.inDetail2}>{periodMin.unit_th}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onPress(3);
              }}
              style={[styles.buttonEdit, { backgroundColor: "#67b99a" }]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                EDIT
              </Text>
              <FontAwesome color={"white"} name="wrench" size={18} />
            </TouchableOpacity>
          </View>
          <View
            disabled={false}
            style={[styles.cardSetting, { backgroundColor: "#f3bbe1" }]}
          >
            <MaterialIcons color={"#da4167"} name="timelapse" size={60} />
            <Text
              style={{ color: "#da4167", fontSize: 18, fontWeight: "bold" }}
            >
              {periodMax.name}
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>{periodMax.time}</Text>
              <Text style={styles.inDetail2}>{periodMax.unit_th}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onPress(4);
              }}
              style={[styles.buttonEdit, { backgroundColor: "#ef798a" }]}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                EDIT
              </Text>
              <FontAwesome color={"white"} name="wrench" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomSheet visible={show} onBackdropPress={()=>{setShow(!show)}} >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.BottomSheets, rBottomSheetStyle]}>
              <View
                style={{
                  width: 75,
                  height: 5,
                  backgroundColor: "grey",
                  alignSelf: "center",
                  marginVertical: 15,
                  borderRadius: 2,
                  opacity: 0.3,
                }}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                >
                  {textSetting}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 5,
                    }}
                    onPress={() => {
                      minus();
                    }}
                  >
                    <Entypo name="minus" size={50} color={"#ce4257"} />
                  </TouchableOpacity>
                  <View style={styles.TextInput}>
                    <Text style={styles.text}>{qty}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      plus();
                    }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 5,
                    }}
                  >
                    <Entypo name="plus" size={50} color={"#00a896"} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#edede9",
                    borderRadius: 10,
                    marginTop: 25,
                    paddingHorizontal: 10,
                  }}
                >
                  <RadioButton
                    value="hours"
                    status={checked === "hours" ? "checked" : "unchecked"}
                    onPress={() => setChecked("hours")}
                  />
                  <Text>ชั่วโมง</Text>
                  <RadioButton
                    value="day"
                    status={checked === "day" ? "checked" : "unchecked"}
                    onPress={() => setChecked("day")}
                  />
                  <Text>วัน</Text>
                  <RadioButton
                    value="month"
                    status={checked === "month" ? "checked" : "unchecked"}
                    onPress={() => setChecked("month")}
                  />
                  <Text>เดือน</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    subMit();
                  }}
                  style={{
                    backgroundColor: "#2a8d4f",
                    width: "95%",
                    position: "absolute",
                    bottom: -165,
                    height: 50,
                    borderRadius: 6,
                    padding: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    บันทึก
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      </BottomSheet>
    </View>
  );
}

export default Setting;
const gap = 15;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 30,
    zIndex: 10,
    elevation: 10,
  },
  cardSetting: {
    width: 170,
    height: 240,
    borderRadius: 10,
    marginVertical: gap / 2,
    padding: 10,
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: gap / -2,
  },
  inCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inDetail: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
  inDetail2: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonEdit: {
    width: 85,
    height: 33,
    borderRadius: 5,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  BottomSheets: {
    backgroundColor: "white",
    height: windowHeight,
    top: windowHeight,
    borderRadius: 25,
    width: "100%",
    position: "absolute",
  },
  TextInput: {
    backgroundColor: "#e5e5e5",
    width: 60,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#252422",
    fontSize: 25,
  },
});
