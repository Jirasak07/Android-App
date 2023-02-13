import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyles from "../Style/globalStyle";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function DashBoard({ navigation }) {
  return (
    <View style={globalStyles.containerContent}>
      <ScrollView>
        <Text>Dashboard</Text>
        <ScrollView>
          <Text style={{paddingHorizontal:10}} >รายการ</Text>
          <View style={globalStyles.containerInfo}>
            <View style={globalStyles.boxInfo1}>
              <View style={{flexDirection:'row', justifyContent:'space-evenly',flex:1,alignItems:'center' }} >
                  <FontAwesome name="calendar" color={'#073b4c'} size={60} style={{width:100}} />
                  <View style={{width:200,height:150}} ></View>
              </View>
            </View>
            <View style={globalStyles.boxInfo2}>
              <Text>1234</Text>
            </View>
            <View style={globalStyles.boxInfo3}>
              <Text>1234</Text>
            </View>
            <View style={globalStyles.boxInfo4}>
              <Text>1234</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
