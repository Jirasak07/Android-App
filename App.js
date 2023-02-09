import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login/LoginPage";

export default function App() {
  return <LoginPage />;
}
