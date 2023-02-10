import { StatusBar } from "expo-status-bar";
import LoginPage from "./Login/LoginPage";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DashBoard from "./Page/DashBoard";
import FaIcon from "react-native-vector-icons/FontAwesome";
import RequestMe from "./Page/RequestMe";

export default function App() {
  const PageStack1 = createStackNavigator();
  const tabPage1 = () => {
    <PageStack1.Navigator>
      <PageStack1.Screen name="" />
    </PageStack1.Navigator>;
  };
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <RequestMe/>
    </NavigationContainer>
  );
}
