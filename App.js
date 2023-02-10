import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login/LoginPage";
import Ionicons from "react-native-vector-icons";
import TabBottom from "./Tab/TabBottom";
import Booking from './Page/Booking'
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Login"} screenOptions={{headerShown:false}} >
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
        <Stack.Screen name="Home" component={TabBottom} />
        <Stack.Screen name="Home2" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
