import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../Style/globalStyle";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import FaIcon from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dad7cd" }}>
      <View
        style={[
          globalStyles.containerContent,
          { paddingHorizontal: 10, paddingVertical: 10 },
        ]}
      >
        <View style={styles.content}>
          <Fa5Icon
            name="user-alt"
            size={40}
            style={{
              padding: 50,
              backgroundColor: "#e5e5e5",
              borderRadius: 100,
              color: "#111",
            }}
          />
          <Text style={{ marginTop: 20, fontWeight: "900", fontSize: 32 }}>
            Name
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.btnLogout}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            LOGOUT
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    justifyContent: "center",
    borderBottomColor: "#403d39",
    alignItems: "center",
    padding: 30,
    // backgroundColor: "#4361ee",
    borderRadius: 8,
    borderBottomWidth: 0.5,
  },
  btnLogout: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#df3b57",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
