import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";

const RequestMeList = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.items, styles.cardAll]}>
        <Text
          style={{
            color: "#00337C",
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
              color: "#00337C",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#00337C",
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
            color: "#FF5F00",
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
              color: "#FF5F00",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#FF5F00",
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
            color: "#125C13",
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
              color: "#125C13",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#125C13",
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
            color: "#DC0000",
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
              color: "#DC0000",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            0
          </Text>
          <Text
            style={{
              color: "#DC0000",
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
   
  },
  items: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 150,
    height: 100,
  },
  cardAll: {
    backgroundColor: "#6096B4aa",
    borderRadius: 10,
  },
  cardPadding: {
    backgroundColor: "#ffd100aa",
    borderRadius: 10,
  },
  cardCancel: {
    backgroundColor: "#F48484aa",
    borderRadius: 10,
  },
  cardApprove: {
    backgroundColor: "#829460aa",
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
