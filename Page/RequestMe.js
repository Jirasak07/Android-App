import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";
import FaIcon from "react-native-vector-icons/FontAwesome5";
const RequestMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <View style={styles.icon}>
            <FaIcon name="clipboard-list" style={{ fontSize: 50 }} />
          </View>
          <View style={styles.text_content}>
            <Text>RequestMe</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default RequestMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EFF2EF",
  },
  content: {
    marginTop: 50,
  },
  card: {
    padding: 10,
    margin: 10,
  },
  icon: {
    textAlign: "left",
    padding: 10,
  },
  text_content: {
    textAlign: "right",
    padding: 10,
    alignSelf: "center",
  },
});
