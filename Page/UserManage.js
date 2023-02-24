import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../Style/globalStyle";
export default function UserManage() {
  const [users, setUsers] = useState({});
  const [rolename, setRolename] = useState("Admin");
  const ChangeUser = (val) => {
    axios
      .get("http://192.168.10.226/api/change-role/user/" + val)
      .then((res) => {
        console.log(res.status);
      });
  };
  useEffect(() => {
    console.log("componentmount");
    axios.get("http://192.168.10.226/api/show/user").then((res) => {
      const user = res.data.user;
      setUsers(user);
    });
    const interval = setInterval(() => {
      axios.get("http://192.168.10.226/api/show/user").then((res) => {
        const user = res.data.user;
        setUsers(user);
      });
    }, 3000);
    return () => {
      console.log("com[pnent unmount");
      clearInterval(interval);
    };
  }, []);
  const renderItem = ({ item }) => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={style.container}>
          <View style={style.card}>
            <Text>{item.name}</Text>
            <TouchableOpacity
              style={style.BtnRole}
              onPress={() => {
                ChangeUser(item.id);
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                {item.role_user == 1
                  ? "Admin"
                  : item.role_user == 2
                  ? "User"
                  : "Driver"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  return (
    <View
      style={[globalStyles.containerContent, { backgroundColor: "#edf2f4" }]}
    >
      <Text style={style.title}>User Manage</Text>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  container: {
    backgroundColor: "white",
    minWidth: "90%",
    minHeight: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  BtnRole: {
    backgroundColor: "#0077b6",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 3,
    width: 70,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
