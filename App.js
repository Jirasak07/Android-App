import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Login/LoginPage";
import TabBottom from "./BottomTab/BottomTab";


export default function App() {
  const First = createStackNavigator();
  return (
    <NavigationContainer>
      <First.Navigator initialRouteName="login">
        <First.Screen name="login" component={LoginPage} />
        <First.Screen name="content" component={TabBottom} options={{headerTitile:'',tabBarLabel: "หน้าแรก",}} />
      </First.Navigator>
    </NavigationContainer>
  );
}
