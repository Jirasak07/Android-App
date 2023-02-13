import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../Style/globalStyle";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
export default function Booking() {
  const Stack = createStackNavigator()
  return (
    <View style={globalStyles.containerContent} >
      <Text>Booking</Text>
    </View>
  );
}
