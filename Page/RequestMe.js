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
import Dialog from "react-native-dialog";


export default function RequestMe() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalE, setModalE] = useState(false);
  const [modalC, setModalC] = useState(false);

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));
  const [now, setNow] = useState(new Date(Date.now()));

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
  function showSearch(){
    
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.contentH}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexGrow: 2 }}>
                <Text style={[styles.text_header, { marginTop: 10 }]}>
                  ข้อมูลการจอง
                </Text>
              </View>
              {/* <View style={{ flexGrow: 0 }}>
                <Pressable onPress={()=>{}}>
                  <FaIcon
                    name="search"
                    style={{ fontSize: 20, color: "#6c757d" }}
                  />
                </Pressable>
              </View> */}
            </View>

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
                    <Text style={{color:'#FF5F00'}}>แก้ไข</Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnC}
                    onPress={() => setModalC(true)}
                  >
                    <Text style={{color:'#DC0000'}}>ยกเลิก</Text>
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
                  <View style={[styles.text_h, { paddingBottom: 10 }]}>
                    <Text style={{ fontWeight: "900", fontSize: 20 }}>
                      รายละเอียดการจอง
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => setModalVisible(false)}
                    style={styles.icon_h}
                  >
                    <FaIcon name="close" style={{ fontSize: 18 }} />
                  </Pressable>
                </View>

                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  ชื่อผู้จอง :
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  สถานะการจอง :
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  ช่วงวันที่ :
                </Text>

                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  รายละเอียดการจอง :
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}></Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  รายละเอียดรถและคนขับ :
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}></Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}>
                  สาเหตุการยกเลิก :
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "700" }}></Text>

                <Pressable
                  style={[styles.btnConfirm, { marginTop: 10 }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    ยืนยัน
                  </Text>
                </Pressable>
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
                    <Text style={{ fontWeight: "900", fontSize: 20 }}>
                      รายละเอียดการจอง
                    </Text>
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
                    minimumDate={now}
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

                <Pressable style={[styles.btnConfirm, { marginTop: 10 }]}>
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    ยืนยัน
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <View>
            <Dialog.Container visible={modalC}>
              <Dialog.Title style={{ fontWeight: "700" }}>
                ยกเลิกการจอง
              </Dialog.Title>
              <Dialog.Description>โปรดระบุสาเหตุการจอง</Dialog.Description>
              <Dialog.Input placeholder="ระบุสาเหตุ"></Dialog.Input>
              <Dialog.Button label="ยืนยัน" />
              <Dialog.Button label="ยกเลิก" onPress={() => setModalC(false)} />
            </Dialog.Container>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginTop: 50,
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
    backgroundColor: "#ffd100",
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
    backgroundColor: "#F48484",
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
    backgroundColor: "#0081C9",
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
