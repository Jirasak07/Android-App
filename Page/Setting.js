import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Fa from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function Setting({ navigation }) {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
    console.log(modal);
  };
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
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              จองล่วงหน้าขั้นต่ำ
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>30</Text>
              <Text style={styles.inDetail2}>วัน</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                showModal();
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
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              จองล่วงหน้าสูงสุด
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>30</Text>
              <Text style={styles.inDetail2}>วัน</Text>
            </View>
            <TouchableOpacity
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
              style={{ color: "#368f8b", fontSize: 20, fontWeight: "bold" }}
            >
              ระยะจองขั้นต่ำ
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>30</Text>
              <Text style={styles.inDetail2}>วัน</Text>
            </View>
            <TouchableOpacity
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
              style={{ color: "#da4167", fontSize: 20, fontWeight: "bold" }}
            >
              ระยะจองสูงสุด
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>30</Text>
              <Text style={styles.inDetail2}>วัน</Text>
            </View>
            <TouchableOpacity
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
      <Modal animationType="slide" visible={modal}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 50,
            backgroundColor: "white",
          }}
        >
          <MaterialIcons
            style={{ alignSelf: "flex-end", marginRight: 10, marginTop: 5 }}
            color={"#c81d25"}
            size={30}
            name="cancel"
            onPress={() => setModal(!modal)}
          />
          <Text>5555</Text>
        </View>
      </Modal>
    </View>
  );
}

export default Setting;
const gap = 15;
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 30,
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
});
