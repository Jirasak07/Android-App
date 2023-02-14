import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../Style/globalStyle";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Calendarr from "../Calendar/Calendar";
import axios from "axios";

export default function DashBoard({ navigation }) {
  const destro = async () => {
    await AsyncStorage.removeItem("@Login");
  };
  const [bookiall, setBookiall] = useState();
  useEffect(() => {
    const myHeaders = new Headers();
    fetch("http://localhost:2222/index.php/api/show/listdata", {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    }).then((response) => {
      console.log(response);
    });
  });
  return (
    <View style={globalStyles.containerContent}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
          Dashboard
        </Text>
        <Text style={{ paddingHorizontal: 15, fontSize: 16 }}>รายการ</Text>
        <View style={style.cardContainer}>
          <View style={[style.cardInfo, { backgroundColor: "#073b4c30" }]}>
            <Entypo name="list" size={40} color={"#073b4c"} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontWeight: "bold", padding: 5, color: "#073b4c" }}
              >
                ทั้งหมด
              </Text>
              <Text style={{ fontSize: 50, color: "#073b4c" }}></Text>
            </View>
          </View>
          <View style={[style.cardInfo, { backgroundColor: "#f7b26730" }]}>
            <MaterialCommunityIcons
              name="timer-sand"
              size={40}
              color={"#f7b267"}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontWeight: "bold", padding: 5, color: "#f7b267" }}
              >
                รอดำเนินการ
              </Text>
              <Text style={{ fontSize: 50, color: "#f7b267" }}>0</Text>
            </View>
          </View>
          <View style={[style.cardInfo, { backgroundColor: "#49a07830" }]}>
            <FontAwesome5 name="check-square" size={40} color={"#49a078"} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontWeight: "bold", padding: 5, color: "#49a078" }}
              >
                อนุมัติแล้ว
              </Text>
              <Text style={{ fontSize: 50, color: "#49a078" }}>0</Text>
            </View>
          </View>
          <View style={[style.cardInfo, { backgroundColor: "#e0526330" }]}>
            <MaterialIcons name="cancel" size={40} color={"#e05263"} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontWeight: "bold", padding: 5, color: "#e05263" }}
              >
                ยกเลิกแล้ว
              </Text>
              <Text style={{ fontSize: 50, color: "#e05263" }}>0</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 40, paddingHorizontal: 10, marginTop: 5 }}>
          <Calendarr />
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    paddingTop: 10,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardInfo: {
    // backgroundColor: "#edf2f4",
    width: 160,
    height: 95,
    borderRadius: 10,
    padding: 20,
    paddingTop: 25,
    marginBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
