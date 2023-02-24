import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../Style/globalStyle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const HistoryList = ({ navigation }) => {
  return (
    <View style={globalStyles.containerContent}>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.txtHead}>HistoryList</Text>
        <View></View>
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: "#edf2f4",
        }}
      >
        <View style={[styles.card, { borderLeftColor: "green" }]}>
          <Text>รายการจอง อนุมัติ</Text>
        </View>
        <View style={[styles.card, { borderLeftColor: "red" }]}>
          <Text>รายการจอง ยกเลิก</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  head: {
    backgroundColor: "white",
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  txtHead: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 3,
    padding: 10,
    justifyContent: "center",
    borderLeftWidth: 6,
    marginVertical: 5,
  },
});
