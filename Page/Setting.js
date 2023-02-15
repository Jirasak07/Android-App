import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Setting({ navigation }) {
  return <View style={styles.constainer}>
    <View style={styles.cardSetting} ></View>
  </View>;
}

export default Setting;
const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  cardSetting: {
    backgroundColor: "white",
    width:350,
    height:160
  },
});
