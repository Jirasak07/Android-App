import axios from "axios";

import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";

function LoginPage({ navigation }) {
  const userName = useRef();
  const passWord = useRef();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const LoginSuccess = () => {
    Alert.alert("ยินดีต้อนรับเข้าสู่ระบบ", "", [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("content");
        },
      },
    ]);
  };
  const onClick = () => {
    axios({
      method: "POST",
      url: "https://api.lanna.co.th/Profile/checkuser",
      data: { username, password },
    }).then((response) => {
      if (response["data"].Result == "true") {
        LoginSuccess();
      } else if (response["data"].Result == "authenfailed") {
        Alert.alert("รหัสผ่านไม่ถูกต้อง ", "");
        passWord.current.focus();
      } else if (response["data"].Result == "notfound") {
        Alert.alert("ไม่พบผู้ใช้ ", "");
        userName.current.focus();
      }
    });
  };

  return (
    <View style={styles.containerLogin}>
      <View style={styles.loginHead}>
        <Image
          source={require("../assets/Image/lanna-removebg-preview.png")}
          style={{ aspectRatio: 1, resizeMode: "contain" }}
        />
      </View>
      <View style={styles.bodyLogin}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>ระบบจองรถ</Text>
        <TextInput
          inputMode="email"
          spellCheck={false}
          onChangeText={setUsername}
          placeholder=" Username"
          style={styles.TextInput}
          ref={userName}
        />
        <TextInput
          onChangeText={setpassword}
          placeholder=" Password"
          secureTextEntry="true"
          style={styles.TextInput}
          ref={passWord}
        />
        <Button title="เข้าสู่ระบบ" color="#2a9d8f" onPress={onClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: "#edf2f4",
    width: "95%",
    height: "60%",
    borderRadius: 5,
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
    backgroundColor: "#ced4da",
    width: 300,
    height: 50,
    borderRadius: 3,
    color: "#252422",
    fontSize: 18,
  },
});
export default LoginPage;
