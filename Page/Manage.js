import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Manage({ navigation }) {
  return (
    <View>
      <Text
        style={{
          marginTop: 30,
          fontWeight: "700",
          fontSize: 18,
          marginLeft: 10,
        }}
      >
        Configuration
      </Text>
      <View style={styles.container}>
        <View style={styles.InfoContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting")}
            style={[styles.cardInfo, { borderColor: "#3d348b" }]}
          >
            <Ionicons name="settings-sharp" color={"#3d348b"} size={80} />
            <Text style={{ color: "#3d348b", fontSize: 18, fontWeight: "700" }}>
              ตั้งค่าพื้นฐานระบบ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Car")}
            style={[styles.cardInfo, { borderColor: "#2a9d8f" }]}
          >
            <FontAwesome5 name="car-side" color={"#2a9d8f"} size={80} />
            <Text style={{ color: "#2a9d8f", fontSize: 18, fontWeight: "700" }}>
              จัดการรถภายใน
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardInfo, { marginTop: 15, borderColor: "#eb5e28" }]}
          >
            <FontAwesome name="drivers-license" color={"#eb5e28"} size={80} />
            <Text style={{ color: "#eb5e28", fontSize: 18, fontWeight: "700" }}>
              จัดการพนักงานขับ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardInfo, { marginTop: 15, borderColor: "#ff9e00" }]}
          >
            <Ionicons name="person" color={"#ff9e00"} size={80} />
            <Text style={{ color: "#ff9e00", fontSize: 18, fontWeight: "700" }}>
              จัดการผู้ใช้ในระบบ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardInfo: {
    width: 170,
    height: 230,
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#e7ecef",
    borderTopWidth: 7,
  },
  InfoContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
    marginTop: 30,
  },
  shadowCard: {
    shadowOpacity: 1,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
