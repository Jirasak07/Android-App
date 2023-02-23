import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

const RequestAddmin = ({ navigation }) => {
  const [all, setAll] = useState(0);
  const [history, setHistory] = useState(0);
  useEffect(() => {
    axios.get("http://192.168.10.226/api/show/booking").then((res) => {
      const datares = res.data["showbooking"];
      setAll(datares.length);
    });
    axios.get("http://192.168.10.226/api/show/history").then((res) => {
      const datares = res.data;
      setHistory(datares.length);
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Request</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", paddingVertical: 15 }}>
        <TouchableOpacity
          style={[styles.containerInfo, { borderColor: "#52b788" }]}
          onPress={() => {
            navigation.navigate("Requestme");
          }}
        >
          <MaterialCommunityIcons name="account" color={"#52b788"} size={70} />

          <Text style={{ color: "#52b788", fontSize: 25, fontWeight: "600" }}>
            การจองของฉัน
          </Text>
          <Text style={{ color: "#52b788", fontSize: 25, fontWeight: "600" }}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerInfo, { borderColor: "#944bbb" }]}
          onPress={() => {
            navigation.navigate("Requestall");
          }}
        >
          <MaterialCommunityIcons
            name="file-document-multiple-outline"
            color={"#944bbb"}
            size={70}
          />

          <Text style={{ color: "#944bbb", fontSize: 25, fontWeight: "600" }}>
            การจองทั้งหมด
          </Text>
          <Text style={{ color: "#944bbb", fontSize: 25, fontWeight: "600" }}>
            {all}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerInfo, { borderColor: "#ff8c42" }]}
          onPress={() => {
            navigation.navigate("Historyrequest");
          }}
        >
          <MaterialCommunityIcons name="history" color={"#ff8c42"} size={70} />

          <Text style={{ color: "#ff8c42", fontSize: 25, fontWeight: "600" }}>
            ประวัติรายการ
          </Text>
          <Text style={{ color: "#ff8c42", fontSize: 25, fontWeight: "600" }}>
            {history}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RequestAddmin;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  containerInfo: {
    flex: 1,
    width: 350,
    height: 130,
    borderRadius: 5,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderLeftWidth: 8,
    backgroundColor: "#e7ecef",
  },
});
