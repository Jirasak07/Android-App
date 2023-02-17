import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Loading({navigation}) {
  const getStroage = async () => {
    const login = await AsyncStorage.getItem("@Login");
    const role = await AsyncStorage.getItem("@role");
    if (login == "yes") {
        console.log(login)
      navigation.navigate(role);
    } else {
      navigation.navigate("Login");
    }
  };
  useEffect(() => {
    getStroage();
   
  },[]);
  return (
    <View style={{flex:1,backgroundColor:'red'}} >
      <Text>Hi</Text>
    </View>
  );
}

export default Loading;
