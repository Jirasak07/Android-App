import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Alert,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Data } from "../data";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import { TextInput } from "react-native-gesture-handler";

const RequestAll = () => {
  const [id, setId] = useState();
  const [data, setData] = useState(Data);
  const [modal, setModal] = useState(false);
  const [modalApprove, setModalApprove] = useState(false);
  const [textCancel, setTextCancel] = useState("");
  const cancels = useRef();
  let rowRefs = new Map();
  const Approve = () => {
    setModalApprove(!modalApprove);
  };
  const onChangeText = (ev) => {
    setTextCancel(ev);
    // console.log(textCancel)
  };
  const Cancel = () => {
    // const temp = data.filter((item) => item.id !== id);
    // setData(temp);
    setTextCancel("");
    setModal(!modal);
  };
  const subMitCancel = () => {
    if (!textCancel) {
      console.log("กรุณากรอกข้อมูล");
    } else {
      console.log("Success " + textCancel);
    }
  };
  const RenderRight = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-60, 100],
      outputRange: [0, -1],
    });
    return (
      <Animated.View
        style={{
          width: 190,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "space-evenly",
          opacity: trans,
          marginRight: 10,
        }}
      >
        <TouchableOpacity
          onPress={Approve}
          style={{
            backgroundColor: "#ffffff",
            height: 80,
            width: 80,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-checkbox" size={30} color={"#38b000"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Cancel}
          style={{
            backgroundColor: "#ffffff",
            height: 80,
            width: 80,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-trash-outline" size={30} color={"red"} />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Swipeable
        key={item.id}
        ref={(ref) => {
          if (ref && !rowRefs.get(item.id)) {
            rowRefs.set(item.id, ref);
          }
        }}
        useNativeAnimations
        overshootRight={false}
        overshootLeft={false}
        renderRightActions={RenderRight}
        onSwipeableRightWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            setId(item.id);
            if (key !== item.id && ref) {
              ref.close();
            } else {
              // setTimeout(() => {
              //   ref.close();
              // }, 1000);
            }
          });
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          key={item.id}
          style={{
            flex: 1,
            backgroundColor: "#ffff",
            flexDirection: "row",
            marginVertical: 6,
            height: 80,
            marginHorizontal: 5,
            padding: 20,
            justifyContent: "flex-start",
            alignItems: "center",
            borderLeftColor: "#00b4d8",
            borderLeftWidth: 5,
            borderRadius: 5,
          }}
        >
          <FontAwesome name="warning" color={"#00b4d8"} size={30} />
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.Message}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#eeee",
        // paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          height: 80,
          backgroundColor: "#ffffff",
          paddingTop: 20,
          borderBottomColor: "#eeee",
          borderBottomWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          รายการจองทั้งหมด
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          style={{ flexlex: 1 }}
          contentContainerStyle={{ marginTop: 10 }}
        />
      </View>
      <View>
        <Dialog.Container visible={modal}>
          <Dialog.Title style={{color:'red'}}>ยกเลิกรายการ</Dialog.Title>
          <Dialog.Input
            onChangeText={(ev) => {
              onChangeText(ev);
            }}
            textInputRef={cancels}
            placeholder="หมายเหตุการยกเลิก"
          />
          <Dialog.Button label="Save" onPress={subMitCancel} />
          <Dialog.Button label="Cancel" onPress={() => setModal(!modal)} />
        </Dialog.Container>
      </View>
      <View>
        <Dialog.Container visible={modalApprove}>
          <Dialog.Title>การอนุมัติรายการ</Dialog.Title>
          <Dialog.Description style={{fontSize:16,color:'red'}}>กรุณาเลือกประเภทรถ *</Dialog.Description>
          <Dialog.Button label="รถภายใน"  />
          <Dialog.Button label="รถภายนอก"  />
          <Dialog.Button label="ยกเลิก" onPress={() => setModalApprove(!modalApprove)} />
        </Dialog.Container>
      </View>
    </View>
  );
};

export default RequestAll;

const styles = StyleSheet.create({});
