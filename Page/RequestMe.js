import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import RequestMeList from "./RequestMeList";
const RequestMe = () => {
  return (
    <View style={styles.container}>
      <View>
        <RequestMeList />
      </View>

      <ScrollView style={styles.contentH}>
        <Text> </Text>
      </ScrollView>
    </View>
  );
};

export default RequestMe;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  contentH: {
    marginTop: 20,
  },
});
