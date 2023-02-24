import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import globalStyles from "../Style/globalStyle";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, MaterialIcons, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({navigation}) => {
  const Logout = async()=>{
    await AsyncStorage.removeItem('@Login')
    await AsyncStorage.removeItem('@role')
    await AsyncStorage.removeItem('@iduser')
    await AsyncStorage.removeItem('@name')
    navigation.navigate("Login")
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e7ecef",
      }}
    >
      <View style={styles.content}>
        <Image
          style={styles.Profile}
          source={require("../assets/Image/pic.jpeg")}
        />
        <View style={styles.containerProfile}>
          <Text style={styles.name}>TR-Jirasak Singhabutr</Text>
         <Text>
          สถานะ : กำลังใช้งาน <Octicons name="dot-fill" color={'green'} />
         </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.LogoutBtn} onPress={()=>{Logout()}} >
        <MaterialIcons name="logout" color={"white"} size={35} />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  Profile: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  LogoutBtn: {
    backgroundColor: "#e63946",
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerProfile: {
    justifyContent:'center',
    alignItems:'center'
  },
  name: {
    fontSize: 30,
    color: "#000814",
    fontWeight: "700",
    marginTop:20
  },
});
