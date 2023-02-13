import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import RequestMeList from "./RequestMeList";
import { Card } from "react-native-shadow-cards";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import FaIcon from "react-native-vector-icons/FontAwesome";

const RequestMe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalE, setModalE] = useState(false);
  const [modalC, setModalC] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <RequestMeList />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.contentH}>
          <Text style={styles.text_header}>ข้อมูลการจอง</Text>
          <Card style={styles.card}>
            <View style={styles.text_h}>
              <Text>วันที่</Text>
              <Text>รายละเอียดการจอง</Text>
              <Text>สถานะ</Text>
            </View>
            <Pressable
              style={styles.icon_h}
              onPress={() => setModalVisible(true)}
            >
              <Fa5Icon name="ellipsis-h" />
            </Pressable>
          </Card>

          <Card style={styles.card}>
            <View style={styles.text_h}>
              <Text>วันที่</Text>
              <Text>รายละเอียดการจอง</Text>
              <Text>สถานะ</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Pressable style={styles.btnE} onPress={() => setModalE(true)}>
                  <Text>แก้ไข</Text>
                </Pressable>
                <Pressable style={styles.btnC}>
                  <Text style={{ color: "#ffffff" }}>ยกเลิก</Text>
                </Pressable>
              </View>
            </View>

            <Pressable
              style={styles.icon_h}
              onPress={() => setModalVisible(true)}
            >
              <Fa5Icon name="ellipsis-h" />
            </Pressable>
          </Card>
        </View>

        {/* modal approve and cancel detail */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  borderBottomColor: "#424C55",
                  borderBottomWidth: 0.5,
                }}
              >
                <View style={[styles.text_h, { paddingBottom: 10 }]}>
                  <Text>รายละเอียดการจอง</Text>
                </View>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.icon_h}
                >
                  <FaIcon name="close" />
                </Pressable>
              </View>

              <Text style={styles.modalText}>ชื่อผู้จอง</Text>
              <Text style={styles.modalText}>สถานะการจอง</Text>
              <Text style={styles.modalText}>ช่วงวันที่</Text>
              <Text style={styles.modalText}>รายละเอียดรถและคนขับ</Text>
              <Text style={styles.modalText}>รายละเอียดการจอง</Text>
              <Text style={styles.modalText}>สาเหตุการยกเลิก</Text>
            </View>
          </View>
        </Modal>

        {/* modal edit */}
        <Modal animationType="slide" transparent={true} visible={modalE}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  borderBottomColor: "#424C55",
                  borderBottomWidth: 0.5,
                }}
              >
                <View style={[styles.text_h, { paddingBottom: 10 }]}>
                  <Text>รายละเอียดการจอง</Text>
                </View>
                <Pressable
                  onPress={() => setModalE(!modalE)}
                  style={styles.icon_h}
                >
                  <FaIcon name="close" />
                </Pressable>
              </View>

              <Text>ชื่อผู้จอง : </Text>
              <Text>สถานะการจอง : </Text>
              <Text>ช่วงวันที่ :</Text>
              <Text>รายละเอียดการจอง :</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default RequestMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E1E2EF",
  },
  contentH: {
    marginTop: 20,
    height: 500,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 20,
  },
  text_header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  icon_h: {
    color: "#000",
    flexGrow: 0,
  },
  text_h: {
    flexGrow: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  btnE: {
    backgroundColor: "#E4FF1A",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginRight: 10,
  },
  btnC: {
    backgroundColor: "#DC0000",
    padding: 10,
    borderRadius: 10,
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
