import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { NativeBaseProvider, Box } from "native-base";
const RequestMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.cardAll}>
          <View style={styles.icon}>
            <FaIcon
              name="clipboard-list"
              style={{ fontSize: 50, color: "#fff",textAlign:'center', }}
            />
          </View>
          <View style={styles.text_content}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              ทั้งหมด
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700",textAlign:'center', }}>
              0
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              รายการ
            </Text>
          </View>
        </Card>

        <Card style={styles.cardPadding} >
          <View style={styles.icon}>
            <FaIcon
              name="hourglass-end"
              style={{ fontSize: 50, color: "#fff",textAlign:'center', }}
            />
          </View>
          <View style={styles.text_content}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              รอดำเนินการ
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700",textAlign:'center', }}>
              0
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              รายการ
            </Text>
          </View>
        </Card>

        <Card style={styles.cardApprove} >
          <View style={styles.icon}>
            <FaIcon
              name="check-circle"
              style={{ fontSize: 50, color: "#fff",textAlign:'center', }}
            />
          </View>
          <View style={styles.text_content}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              อนุมัติแล้ว
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700",textAlign:'center', }}>
              0
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              รายการ
            </Text>
          </View>
        </Card>

        <Card style={styles.cardCancel} >
          <View style={styles.icon}>
            <FaIcon
              name="ban"
              style={{ fontSize: 50, color: "#fff",textAlign:'center', }}
            />
          </View>
          <View style={styles.text_content}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              ยกเลิกแล้ว
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700",textAlign:'center', }}>
              0
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300",textAlign:'center' }}>
              รายการ
            </Text>
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
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#EFF2EF",
  },
  content: {
    marginTop: 50,
  },
  cardAll: {
    padding: 10,
    marginLeft:20,
    marginBottom:10,
    flexDirection: "row",
    backgroundColor: "#4B3F72",
  },
  cardPadding: {
    padding: 10,
    marginLeft:20,
    marginBottom:10,
    flexDirection: "row",
    backgroundColor: "#F2E94E",
  },
  cardCancel: {
    padding: 10,
    marginLeft:20,
    marginBottom:10,
    flexDirection: "row",
    backgroundColor: "#DA3E52",
  },
  cardApprove: {
    padding: 10,
    marginLeft:20,
    marginBottom:10,
    flexDirection: "row",
    backgroundColor: "#96E6B3",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 2,
    color: "#fff",
  },
  text_content: {
    flexGrow: 2,
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
});
