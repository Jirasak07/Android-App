import React from "react";
import LoginPage from "../Login/LoginPage";
import Home from "../Home";
import Productv from "../Product";
import TabHome from "../Tab/Tab-home";
import TabProduct from "../Tab/Tab-product";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
export default function TabBottom({navigtion}){
    const ProductStack = () => {
        const Product = createStackNavigator();
        return (
          <Product.Navigator>
            <Product.Screen
              name="TabStackProduct"
              component={TabProduct}
              options={{ headerTitle: "รายการสินค้า" }}
            />
            <Product.Screen
              name="TabStackProductDe"
              component={Productv}
              options={{ headerTitle: "รายละเอียดสินค้า" }}
            />
          </Product.Navigator>
        );
      };
      const MemberStack = () => {
        const Member = createStackNavigator();
        return (
          <Member.Navigator>
            <Member.Screen
              name="TabStackMember"
              component={Home}
              options={{ headerTitle: "หน้าแรก" }}
            />
            <Member.Screen
              name="TabStackMemberLogin"
              component={LoginPage}
              options={{ headerTitle: "เข้าสู่ระบบ" }}
            />
          </Member.Navigator>
        );
      };
      const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator
              tabBarOPtions={{
                labelStyle: { fontSize: 14 },
                showLabel: true,
                activeTintColor: "tomato",
                inactiveTintColor: "blue",
              }}
            >
              <Tab.Screen
                name="TabHome"
                component={MemberStack}
                options={{
                  tabBarLabel: "หน้าแรก",
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="md-home" size={18} color={color} />;
                  },
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="TabProduct"
                component={ProductStack}
                options={{
                  tabBarLabel: "สินค้า",
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="md-basket" size={18} color={color} />;
                  },
                }}
              />
            </Tab.Navigator>
    )
}