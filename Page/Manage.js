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
      <Text style={{ marginTop: 40, fontWeight: "bold", fontSize: 18 }}>
        {" "}
        Configuration{" "}
      </Text>
      <View style={styles.container}>
        <View style={styles.InfoContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting")}
            style={[styles.cardInfo, { backgroundColor: "#3d348b50" }]}
          >
            <Text style={{ color: "#3d348b", fontSize: 18 }}>
              ตั้งค่าพื้นฐานระบบ
            </Text>
            <Ionicons name="settings-sharp" color={"#3d348b"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardInfo, { backgroundColor: "#2a9d8f50" }]}
          >
            <Text style={{ color: "#2a9d8f", fontSize: 18 }}>
              จัดการรถภายใน
            </Text>
            <FontAwesome5 name="car-side" color={"#2a9d8f"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cardInfo,
              { marginTop: 15, backgroundColor: "#eb5e2850" },
            ]}
          >
            <Text style={{ color: "#eb5e28", fontSize: 18 }}>
              จัดการพนักงานขับ
            </Text>
            <FontAwesome name="drivers-license" color={"#eb5e28"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cardInfo,
              { marginTop: 15, backgroundColor: "#ff9e0050" },
            ]}
          >
            <Text style={{ color: "#ff9e00", fontSize: 18 }}>
              จัดการผู้ใช้ในระบบ
            </Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Ionicons name="person" color={"#ff9e00"} size={60} />
            </View>
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
    justifyContent: "start",
  },
  cardInfo: {
    width: 170,
    height: 130,
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-evenly",
  },
  InfoContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
    marginTop: 30,
  },
});
