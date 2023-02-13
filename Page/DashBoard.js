import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import  globalStyles  from "../Style/globalStyle";
import { ScrollView } from "react-native-gesture-handler";

export default function DashBoard({ navigation }) {
  return (
    <View style={globalStyles.containerContent}>
      <Text>Dashboard</Text>
      <ScrollView
      horizontal
      >

      </ScrollView>
    </View>
  );

}
