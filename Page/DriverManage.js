import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import globalStyles from "../Style/globalStyle";
import { Switch } from "react-native-gesture-handler";
import axios from "axios";
export default function DriverManage() {
  const [ListData, setListData] = useState([]);
  useEffect(() => {
    console.log("mou");
    axios.get("http://192.168.10.226/api/show/driver").then((res) => {
      const resdata = res.data["driver"];
      setListData(resdata);
    });
    const interval = setInterval(() => {
      axios.get("http://192.168.10.226/api/show/driver").then((res) => {
        const resdata = res.data["driver"];
        setListData(resdata);
      });
    }, 2000);
    return () => {
      console.log("unmount");
      clearInterval(interval);
    };
  }, []);
  const setStatus = (id) => {
    console.log(id)
    axios
      .get(`http://192.168.10.226/api/change-status/driver/` + id)
      .then((res) => {
        if (res.data["status"] == "success") {
          axios.get("http://192.168.10.226/api/show/driver").then((res) => {
            const resdata = res.data["driver"];
            setListData(resdata);
          });
        }
      });
  };
  const renderItem = ({ item }) => {
    const statuse = item.status == "1" ? true : false;
    return (
      <ScrollView>
        <View style={styles.CardCar}>
          <Text style={styles.CarText}>
            {item.name} 
          </Text>
          <Switch
            value={statuse}
            onValueChange={() => {
              setStatus(item.id);
            }}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <View
      style={[
        globalStyles.containerContent,
        {
          backgroundColor: "#edf2f4",
          marginTop: 0,
          paddingTop: 20,
          paddingHorizontal: 10,
        },
      ]}
    >
      <Text style={styles.TextTitle}>Manage Driver</Text>
      <FlatList data={ListData} renderItem={renderItem} />
    </View>
  );
}
const styles = StyleSheet.create({
  TextTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 10,
  },
  CardCar: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  CarText: {
    justifyContent: "center",
    alignItems: "center",
  },
});
