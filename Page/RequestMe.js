import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import RequestMeList from "./RequestMeList";
import { Card } from "react-native-shadow-cards";
const RequestMe = () => {
  return (
    <View style={styles.container}>
      <View>
        <RequestMeList />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contentH}>
          <Text style={styles.text_h}>ข้อมูลการจอง</Text>
          <Card style={styles.card}>
            <Text>11111</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default RequestMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentH: {
    marginTop: 20,
    height: 500,
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF7F8",
  },
  text_h: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
});
