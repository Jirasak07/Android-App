import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import RequestMeList from "./RequestMeList";
import { Card } from "react-native-shadow-cards";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import FaIcon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";

const RequestMe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalE, setModalE] = useState(false);
  const [modalC, setModalC] = useState(false);

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <RequestMeList />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                  <Pressable
                    style={styles.btnE}
                    onPress={() => setModalE(true)}
                  >
                    <Text>แก้ไข</Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnC}
                    onPress={() => setModalC(true)}
                  >
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
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
                  <View
                    style={[
                      styles.text_h,
                      { paddingBottom: 10, fontWeight: "900" },
                    ]}
                  >
                    <Text>รายละเอียดการจอง</Text>
                  </View>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.icon_h}
                  >
                    <FaIcon name="close" style={{ fontSize: 18 }} />
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
                    <Text style={{ fontWeight: "900" }}>รายละเอียดการจอง</Text>
                  </View>
                  <Pressable
                    onPress={() => setModalE(!modalE)}
                    style={styles.icon_h}
                  >
                    <FaIcon name="close" style={{ fontSize: 18 }} />
                  </Pressable>
                </View>

                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  ชื่อผู้จอง :{" "}
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  สถานะการจอง :{" "}
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  ช่วงวันที่ :
                </Text>

                {datePicker && (
                  <DateTimePicker
                    value={date}
                    mode={"date"}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    is24Hour={true}
                    onChange={onDateSelected}
                    style={styles.datePicker}
                  />
                )}

                {timePicker && (
                  <DateTimePicker
                    value={time}
                    mode={"time"}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    is24Hour={true}
                    onChange={onTimeSelected}
                    style={styles.datePicker}
                  />
                )}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#20262E",
                      width: 200,
                    }}
                  >
                    <Text style={{ paddingTop: 5 }}>
                      {date.toDateString()} {time.toLocaleTimeString("en-US")}
                    </Text>
                  </View>

                  {!datePicker && (
                    <View style={{ margin: 10 }}>
                      <FaIcon
                        name="calendar"
                        onPress={showDatePicker}
                        style={{ fontSize: 16 }}
                      />
                    </View>
                  )}

                  {!timePicker && (
                    <View style={{ margin: 10 }}>
                      <FaIcon
                        name="clock-o"
                        onPress={showTimePicker}
                        style={{ fontSize: 16 }}
                      />
                    </View>
                  )}
                </View>

                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  รายละเอียดการจอง :
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="รายละเอียดการจอง"
                    keyboardType="text"
                    multiline={true}
                    numberOfLines={4}
                  ></TextInput>
                </View>

                <Pressable style={[styles.btnConfirm]}>
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    ยืนยัน
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
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
    fontWeight: "900",
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
  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
  input: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btnConfirm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#362FD9",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
