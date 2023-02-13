import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";

const RequestMeList = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.items, styles.cardAll]}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          การจองทั้งหมด
        </Text>

        <View style={styles.text_content}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            รายการ
          </Text>
        </View>
      </View>

      <View style={[styles.items, styles.cardPadding]}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          รอดำเนินการ
        </Text>
        <View style={styles.text_content}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            รายการ
          </Text>
        </View>
      </View>

      <View style={[styles.items, styles.cardApprove]}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          อนุมัติแล้ว
        </Text>

        <View style={styles.text_content}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            รายการ
          </Text>
        </View>
      </View>

      <View style={[styles.items, styles.cardCancel]}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          ยกเลิกแล้ว
        </Text>
        <View style={styles.text_content}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            รายการ
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RequestMeList;

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 50,
    padding: 10,
  },
  items: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 150,
    height: 100,
  },
  cardAll: {
    backgroundColor: "#4B3F72",
    borderRadius: 10,
  },
  cardPadding: {
    backgroundColor: "#F2E94E",
    borderRadius: 10,
  },
  cardCancel: {
    backgroundColor: "#DA3E52",
    borderRadius: 10,
  },
  cardApprove: {
    backgroundColor: "#96E6B3",
    borderRadius: 10,
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  text_content: {
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
});
