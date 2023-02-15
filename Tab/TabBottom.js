import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import DriverManager from "../Page/DriverManage";
import DashBoard from "../Page/DashBoard";
import Booking from "../Page/Booking";
import LogoutPage from "../Login/LogoutPage";
import Manage from "../Page/Manage";
import CarManage from "../Page/CarManage";
import UserManage from "../Page/UserManage";
import Profile from "../Page/Profile";
export default function TabBottom() {
  const Tab = createBottomTabNavigator();

  const Manager = () => {
    const ManageStack = createStackNavigator();
    return (
      <ManageStack.Navigator>
        <ManageStack.Screen name="Manage" component={Manage} />
        {/* <ManageStack.Screen name="Car" component={CarManage} />
        <ManageStack.Screen name="UserManage" component={UserManage} />
        <ManageStack.Screen name="Driver" component={DriverManager} /> */}
      </ManageStack.Navigator>
    );
  };
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
          backgroundColor: "white",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashBoard} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Config" component={Manager} />
      <Tab.Screen name="User" component={Profile} />
    </Tab.Navigator>
  );
}
