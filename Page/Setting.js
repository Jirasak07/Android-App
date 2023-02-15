import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Setting({ navigation }) {
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
          <TouchableOpacity
            disabled={false}
            style={[styles.cardSetting, { backgroundColor: "#c7c7ff" }]}
          >
            <Text
              style={{ color: "#480ca890", fontSize: 20, fontWeight: "bold" }}
            >
              จองล่วงหน้าขั้นต่ำ
            </Text>
            <View style={styles.inCard}>
              <Text style={styles.inDetail}>30</Text>
              <Text style={styles.inDetail2}>วัน</Text>
            </View>
            <View></View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: 150,
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
    flex: 1,
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
});
