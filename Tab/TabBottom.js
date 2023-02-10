import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FaIcon from "react-native-vector-icons/FontAwesome";
import DriverManager from "../Page/DriverManage";
import DashBoard from "../Page/DashBoard";
import Booking from "../Page/Booking";
export default function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#ff4800" : "#495057";
          switch (route.name) {
            case "Dashboard":
              return <FaIcon name="dashboard" color={tintColor} size={25} />;
            case "Booking":
              return <FaIcon name="calendar" color={tintColor} size={25} />;
            case "Config":
              return <FaIcon name="sliders" color={tintColor} size={25} />;
          }
        },
        tabBarShowLabel:false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashBoard} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Config" component={DriverManager} />
    </Tab.Navigator>
  );
}
