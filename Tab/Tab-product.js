import react from "react";
import { Button, Text, View } from "react-native";
export default function TabProduct({navigation}) {
  return (
    <View>
      <Text>TabHome</Text>
      <Button title="Product" onPress={()=>navigation.navigate('TabStackProductDe',{id:1234}) } />
    </View>
  );
}