import { StatusBar } from "expo-status-bar";
import LoginPage from "./Login/LoginPage";
import { StyleSheet, View } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DashBoard from "./Page/DashBoard";

export default function App() {
  const PageStack1 = createStackNavigator()
  const tabPage1 =() =>{
      <PageStack1.Navigator>
        <PageStack1.Screen name="" />
      </PageStack1.Navigator>
  }
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          showLabel: true,
          activeTintColor: "#dc2f02",
          inactiveTintColor: "#007f5f",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            tabBarLabel: "Dashboard",
            // tabBarIcon:
          }}
        />
        <Tab.Screen  name="Login"
          component={LoginPage}
          options={{
            tabBarLabel: "Login",
            // tabBarIcon:
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height:'100%',
    height: "100%",
  },
});