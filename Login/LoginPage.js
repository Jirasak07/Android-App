import axios from "axios";
import { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function LoginPage({ navigation }) {
  const userName = useRef();
  const passWord = useRef();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const onClick = async () => {
    const response = await axios.post("http://192.168.10.226/api/chklogin", {
      email: username,
      password: password,
    });
    const data = await response.data;
    console.log(data);
    if (data.status == "success") {
      const role = data.role;
      await AsyncStorage.setItem("@Login", "yes");
      await AsyncStorage.setItem("@role", data.role);
      await AsyncStorage.setItem("@iduser", JSON.stringify(data.id));
      Alert.alert("ยินดีต้อนรับ ", "", [
        {
          text: "ตกลง",
          onPress: () => {
            navigation.navigate(role);
          },
        },
      ]);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfffc" }}>
      <View style={styles.containerLogin}>
        <View style={styles.loginHead}>
          <Image
            source={require("../assets/Image/lanna-removebg-preview.png")}
            style={{ aspectRatio: 1.5, resizeMode: "contain" }}
          />
        </View>
        <View style={styles.bodyLogin}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>ระบบจองรถ</Text>
          <TextInput
            autoCapitalize={"none"}
            inputMode="email"
            spellCheck={false}
            onChangeText={setUsername}
            placeholder="example@lanna.co.th"
            style={styles.TextInput}
            ref={userName}
          />
          <TextInput
            onChangeText={setpassword}
            placeholder=" รหัสผ่าน"
            autoCapitalize={"none"}
            keyboardType="default"
            inputMode="password"
            style={styles.TextInput}
            ref={passWord}
          />
          <TouchableOpacity
            activeOpacity={0.1}
            style={{
              backgroundColor: "#2a9d8f",
              paddingHorizontal: 50,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
            // onPress={() => {
            //   onClick();
            // }}
            // onPress={()=>{  {navigation.navigate("admin")}}}
            onPress={()=>{  {username =="1"? navigation.navigate("admin"):navigation.navigate("user")}}}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              เข้าสู่ระบบ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginHead: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5",
    width: 300,
    height: 50,
    borderRadius: 3,
    color: "#252422",
    fontSize: 18,
    borderColor: "#023047",
  },
});
export default LoginPage;
