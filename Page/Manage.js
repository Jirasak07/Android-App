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
      <ScrollView style={{backgroundColor:'red'}} >
        <View style={styles.InfoContainer}>
          <TouchableOpacity style={[styles.cardInfo, { marginTop: 10 }]}>
            <Text style={{ color: "white", fontSize: 18 }}>ตั้งค่าพื้นฐานระบบ</Text>
            <Ionicons name="settings-sharp" color={"white"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardInfo, { marginTop: 10 }]}>
            <Text style={{ color: "white", fontSize: 18 }}>จัดการรถภายใน</Text>
            <FontAwesome5 name="car-side" color={"white"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardInfo, { marginTop: 10 }]}>
            <Text style={{ color: "white", fontSize: 18 }}>จัดการพนักงานขับ</Text>
            <FontAwesome name="drivers-license" color={"white"} size={60} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardInfo, { marginTop: 10 }]}>
            <Text style={{ color: "white", fontSize: 18 }}>จัดการผู้ใช้ในระบบ</Text>
            <View style={{flex:1,justifyContent:'center'}} >
                 <Ionicons name="person" color={"white"} size={60} />
            </View>
         
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // justifyContent: "center",
    alignItems:'end',
    backgroundColor:'green'
  },
  cardInfo: {
    backgroundColor: "#001d3d",
    width: 170,
    height: 200,
    borderRadius: 5,
    padding: 10,
    justifyContent:'flex-start',

  },
  InfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
