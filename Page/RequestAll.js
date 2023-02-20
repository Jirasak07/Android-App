import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../Style/globalStyle";
export default function RequestAll() {
  return (
    <View style={globalStyles.containerContent}>
       <View style={styles.headContainer}  >
          <Text style={styles.styleText}>รายการจองรถทั้งหมด 0 </Text>
        </View>
      <ScrollView style={styles.content} >
       
      <View style={styles.content} >
        <View style={styles.request} >

        </View>
        <View style={styles.request} >

        </View>
        <View style={styles.request} >

        </View>
        <View style={styles.request} >

        </View>
        <View style={styles.request} >

        </View>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    headContainer:{
      backgroundColor:'#ffffff',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      shadowColor:'#000',
      shadowOpacity:0.1,
      shadowRadius:3,
      shadowOffset:{
        width:0,
        height:5,
      },
      elevation:10,
      zIndex:10,
    },
    styleText:{
      fontSize:18,
      fontWeight:'700'
    },
    content:{
      backgroundColor:'#e9ecef',
      flex:1,
      padding:5
    },
    request:{
      height:130,
      width:'100%',
      backgroundColor:'#ffffff',
      borderRadius:5,
      marginVertical:5
    }
})
