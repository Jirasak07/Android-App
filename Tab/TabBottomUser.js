import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Booking from "../Page/Booking";
import RequestMe from "../Page/RequestMe";
export default function TabBottomUser() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#0e7c7b" : "#8a817c";
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
                <Ionicons name="calendar" color={tintColor} size={tintSize} />
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
          backgroundColor: "#edf2f4",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={RequestMe} />
      <Tab.Screen name="Booking" component={Booking} />
    </Tab.Navigator>
  );
}
