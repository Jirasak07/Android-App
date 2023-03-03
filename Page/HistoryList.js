import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import globalStyles from "../Style/globalStyle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import moment from "moment";
import "moment/locale/th";
const HistoryList = ({ navigation }) => {
  const [history, setHistory] = useState({});
  const FetchData = () => {
    axios.get("http://192.168.10.226/api/show/history").then((res) => {
      console.log(res.data);
      setHistory(res.data);
    });
  };
  useEffect(() => {
    FetchData();
    const interval = setInterval(() => {
      axios.get("http://192.168.10.226/api/show/history").then((res) => {
        console.log(res.data);
        setHistory(res.data);
      });
    }, 2000);
    return clearInterval(interval);
  }, []);
  const renderItem = ({ item }) => {
    const color = item.booking_status == "2"||item.booking_status == "4" ? "green" : "red";
    moment.locale("th");
    const start = moment(item.booking_start).format("DD MMM YYYY H:mm");
    const end = moment(item.booking_end).format("DD MMM YYYY H:mm");
    return (
      <ScrollView
        style={{
     
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: "#edf2f4",
        }}
      >
        <View style={[styles.card, { borderLeftColor: color }]}>
          <View>
            <Text>ผู้จอง : {item.name}</Text>
            <Text>
              วันเวลา : {start} - {end}
            </Text>
            <Text>สถานะ : {item.booking_status == '2'? 'อนุมัติแล้ว':item.booking_status=='4'? 'อนุมัติแล้ว':'ยกเลิก'}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={globalStyles.containerContent}>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.txtHead}>HistoryList</Text>
        <View></View>
      </View>
      <FlatList data={history} renderItem={renderItem}  />
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  head: {
    backgroundColor: "white",
    paddingVertical: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  txtHead: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 3,
    padding: 10,
    justifyContent: "center",
    borderLeftWidth: 6,
    marginVertical: 0,
  },
});
