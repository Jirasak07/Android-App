import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Manage({ navigatoin }) {
  return (
    <View style={styles.container}>
      <View style={styles.InfoContainer}>
        <TouchableOpacity style={[styles.cardInfo, { marginTop: 20 }]}>
          <Text style={{ color: "white", fontSize: 18 }}>
            ตั้งค่าพื้นฐานระบบ
          </Text>
          <Ionicons name="settings-sharp" color={"white"} size={60} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cardInfo, { marginTop: 20 }]}>
          <Text style={{ color: "white", fontSize: 18 }}>จัดการรถภายใน</Text>
          <FontAwesome5 name="car-side" color={"white"} size={60} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cardInfo, { marginTop: 20 }]}>
          <Text style={{ color: "white", fontSize: 18 }}>จัดการพนักงานขับ</Text>
          <FontAwesome name="drivers-license" color={"white"} size={60} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cardInfo, { marginTop: 20 }]}>
          <Text style={{ color: "white", fontSize: 18 }}>
            จัดการผู้ใช้ในระบบ
          </Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Ionicons name="person" color={"white"} size={60} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo: {
    backgroundColor: "#001d3d",
    width: 170,
    height: 130,
    borderRadius: 5,
    padding: 10,
    justifyContent: "flex-start",
  },
  InfoContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
});
