import { StatusBar } from "expo-status-bar";
import LoginPage from "./Login/LoginPage";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const PageStack1 = createStackNavigator()
  const tabPage1 =() =>{
      <PageStack1.Navigator>
        <PageStack1.Screen name="" />
      </PageStack1.Navigator>
  }
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container} >
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height:'100%'
  },
});
