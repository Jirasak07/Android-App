import React from "react";
import { Button, Text, View } from "react-native";

function Productv({ route, navigation }) {
  return (
    <View>
      <Text> Product {'\n'} </Text>
      <Text> ID : {route.params.id} {'\n'} </Text>
      <Button title="Go back Product" onPress={()=>{navigation.goBack()}} />
    </View>
  );
}

export default Productv;
