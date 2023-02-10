import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import RequestMeList from "./RequestMeList";
import { Card } from "react-native-shadow-cards";
import FaIcon from "react-native-vector-icons/FontAwesome5";

const RequestMe = () => {
  return (
    <View style={styles.container}>
      <View>
        <RequestMeList />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contentH}>
          <Text style={styles.text_header}>ข้อมูลการจอง</Text>
          <Card style={styles.card}>
            <View style={styles.text_h}>
              <Text>วันที่</Text>
              <Text>รายละเอียดการจอง</Text>
              <Text>สถานะ</Text>
            </View>
            <View style={styles.icon_h}>
              <FaIcon name="ellipsis-h" />
            </View>
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
    backgroundColor: "#E1E2EF",
  },
  contentH: {
    marginTop: 20,
    height: 500,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
  },
  text_header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  icon_h: {
    color: "#000",
    flexGrow: 0,
  },
  text_h: {
    flexGrow: 2,
  },
});
