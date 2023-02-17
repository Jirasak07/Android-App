import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyles from "../Style/globalStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogoutPage({navigation}) {
  const reMove =async ()=>{
    await AsyncStorage.removeItem('@Login')
    await AsyncStorage.removeItem('@role')
    await AsyncStorage.removeItem('@iduser')
    navigation.navigate("Login")
  }
  return (
    <View style={globalStyles.containerContent}>
      <TouchableOpacity onPress={reMove} style={{height:80,width:100,backgroundColor:'blue'}} ><Text>Logout Page</Text></TouchableOpacity>
      
    </View>
  );
}

export default LogoutPage;
