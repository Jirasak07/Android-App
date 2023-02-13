import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login/LoginPage";
import Ionicons from "react-native-vector-icons";
import TabBottom from "./Tab/TabBottom";
import Booking from "./Page/Booking";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabBottomUser from "./Tab/TabBottomUser";
export default function App() {
  const log = async () => {
    const data = await AsyncStorage.getItem("@Login");
    console.log(data);
  };
  useEffect(() => {
    log();
  }, []);
  const Stack = createStackNavigator();
  const navTheme = DefaultTheme;
  navTheme.colors.background = "#edf2f4";
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
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
        <Stack.Screen name="admin" component={TabBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
