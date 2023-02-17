import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login/LoginPage";
import DashBoard from "./Page/DashBoard";
import Booking from "./Page/Booking";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabBottomUser from "./Tab/TabBottomUser";
import Manage from "./Page/Manage";
import LogoutPage from "./Login/LogoutPage";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CarManage from "./Page/CarManage";
import UserManage from "./Page/UserManage";
import DriverManager from "./Page/DriverManage";
import Setting from "./Page/Setting";
import { View } from "react-native";
import Loading from "./Page/Loading";
export default function App() {
  const Stack = createStackNavigator();
  const navTheme = DefaultTheme;
  navTheme.colors.background = "#ffffff";
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: null,
              headerShown: false,
              headerStyle: {
                backgroundColor: "white",
              },
            }}
          />
          <Stack.Screen name="user" component={TabBottomUser} />
          <Stack.Screen name="admin" component={TabBottoms} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const d = new Date();
console.log(d);
const TabBottoms = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#dc2f02" : "#8a817c";
          const tintSize = focused ? 22 : 18;
          switch (route.name) {
            case "Dashboard":
              return (
                <MCIcons
                  name="monitor-dashboard"
                  color={tintColor}
                  size={tintSize}
                />
              );
            case "Booking":
              return (
                <FaIcon name="calendar" color={tintColor} size={tintSize} />
              );
            case "Config":
              return (
                <FaIcon name="sliders" color={tintColor} size={tintSize} />
              );
            case "User":
              return (
                <FontAwesome5
                  name="user-circle"
                  color={tintColor}
                  size={tintSize}
                />
              );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 15,
          backgroundColor: "white",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashBoard} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Config" component={Manager} />
      <Tab.Screen name="User" component={LogoutPage} />
    </Tab.Navigator>
  );
};
const Manager = () => {
  const ManageStack = createStackNavigator();
  return (
    <ManageStack.Navigator
      screenOptions={{
        title: null,
        headerShown: false,
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <ManageStack.Screen name="Manage" component={Manage} />
      <ManageStack.Screen name="Car" component={CarManage} />
      <ManageStack.Screen name="UserManage" component={UserManage} />
      <ManageStack.Screen name="Driver" component={DriverManager} />
      <ManageStack.Screen name="Setting" component={Setting} />
    </ManageStack.Navigator>
  );
};
