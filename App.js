import { StatusBar } from "expo-status-bar";
import LoginPage from "./Login/LoginPage";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container} >
      <LoginPage />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a9d8f",
    alignItems: "center",
    justifyContent: "center",
    height:'100%'
  },
});
