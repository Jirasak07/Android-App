import React from "react";
import { Button, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go Login" onPress={()=>navigation.navigate('TabStackMemberLogin')}  />
    </View>
  );
}

export default Home;
