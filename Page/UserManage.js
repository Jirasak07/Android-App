import axios from "axios";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import globalStyles from "../Style/globalStyle";
export default function UserManage() {
  useEffect(() => {
    axios.get("http://192.168.10.226/api/show/booking").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <View style={globalStyles.containerContent}>
      <Text>Booking</Text>
    </View>
  );
}
