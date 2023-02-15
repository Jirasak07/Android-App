import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import globalStyles from "../Style/globalStyle";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { format } from "date-fns";
import FaIcon from "@expo/vector-icons/FontAwesome";
import Fa5Icon from "@expo/vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";

import RequestMeList from "./RequestMeList";
LocaleConfig.locales["th"] = {
  monthNames: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  monthNamesShort: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ],
  dayNames: [
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
    "อาทิตย์",
  ],
  dayNamesShort: ["จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส.", "อา."],
  today: "วันนี้",
};
LocaleConfig.defaultLocale = "th";

export default function Booking() {
  const Stack = createStackNavigator();
  const [visible, setVisible] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    setVisible(false);
  };
  const dateNow = format(new Date(), "yyyy-MM-dd");

  const [now, setNow] = useState(new Date(Date.now()));

  //เดินทางไป
  const [datePickerGo, setDatePickerGo] = useState(false);
  const [timePickerGo, setTimePickerGo] = useState(false);

  const [timeGo, setTimeGo] = useState(new Date(Date.now()));
  const [dateGo, setDateGo] = useState(new Date());

  function showDatePickerGo() {
    setDatePickerGo(true);
  }

  function showTimePickerGo() {
    setTimePickerGo(true);
  }

  function onDateSelectedGo(event, value) {
    setDateGo(value);
    setDatePickerGo(false);
  }

  function onTimeSelectedGo(event, value) {
    setTimeGo(value);
    setTimePickerGo(false);
  }
  //เดินทางกลับ
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));
  const [date, setDate] = useState(new Date());
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

  const [markedDate, setMarkedDate] = useState([]);
  const workout = { key: "workout", color: "#7dce82" };
  const vacation = { key: "vacation", color: "#f4e04d" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  useEffect(() => {
    setMarkedDate({
      "2023-02-19": {
        marked: true,
        dots: [workout, vacation],
      },
      "2023-02-23": { marked: true, dots: [workout, vacation] },
      "2023-02-15": {
        marked: true,
        activeOpacity: 0,
        dots: [workout, vacation],
      },
    });
    console.log(dateNow);
  }, []);

  return (
    <View
      style={[
        globalStyles.containerContent,
        {
          backgroundColor: "#F5F5F5",
          alignContent: "center",
          paddingHorizontal: 15,
          paddingTop: 30,
        },
      ]}
    >
      <View>
        <RequestMeList />
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ flexGrow: 2 }}></View>
        <View style={{ flexGrow: 0 }}>
          <Pressable
            style={{
              backgroundColor: "#764AF1",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              padding: 15,
            }}
            onPress={() => setModalAdd(true)}
          >
            <FaIcon
              name="plus"
              style={{
                fontSize: 20,
                color: "#fff",
              }}
            />
          </Pressable>
        </View>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Calendar
          minDate={dateNow}
          locales={"th"}
          style={{ borderRadius: 10, padding: 10 }}
          calendarWidth={320}
          onDayPress={(day) => {
            console.log(day);

            Alert.alert(
              JSON.stringify(day.day + "/" + day.month + "/" + (day.year + 543))
            );
          }}
          onDayLongPress={(day) => {
            setVisible(true);
          }}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          monthFormat={"MMMM yyyy"}
          theme={{}}
          hideExtraDays={true}
          markingType={"multi-dot"}
          markedDates={markedDate}
        />
      </View>

      {/* modal Add */}
      <Modal animationType="slide" transparent={true} visible={modalAdd}>
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
                  จองคิวรถ
                </Text>
              </View>
              <Pressable
                onPress={() => setModalAdd(false)}
                style={styles.icon_h}
              >
                <FaIcon name="close" style={{ fontSize: 18 }} />
              </Pressable>
            </View>

            <Text style={{ marginTop: 10, fontWeight: "700" }}>
              ชื่อผู้จอง :{" "}
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "700" }}>
              วันที่เดินทางไป :
            </Text>

            {datePickerGo && (
              <DateTimePicker
                value={dateGo}
                mode={"date"}
                minimumDate={now}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                is24Hour={true}
                onChange={onDateSelectedGo}
                style={styles.datePicker}
              />
            )}

            {timePickerGo && (
              <DateTimePicker
                value={timeGo}
                mode={"time"}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                is24Hour={true}
                onChange={onTimeSelectedGo}
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
                  {dateGo.toDateString()} {timeGo.toLocaleTimeString("en-US")}
                </Text>
              </View>

              {!datePickerGo && (
                <View style={{ margin: 10 }}>
                  <FaIcon
                    name="calendar"
                    onPress={showDatePickerGo}
                    style={{ fontSize: 16 }}
                  />
                </View>
              )}

              {!timePickerGo && (
                <View style={{ margin: 10 }}>
                  <FaIcon
                    name="clock-o"
                    onPress={showTimePickerGo}
                    style={{ fontSize: 16 }}
                  />
                </View>
              )}
            </View>

            <Text style={{ marginTop: 10, fontWeight: "700" }}>
              วันที่เดินทางกลับ :
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
                placeholder="โปรดระบุสถานที่"
                keyboardType="text"
                multiline={true}
                numberOfLines={4}
              ></TextInput>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ flexGrow: 2 }}></View>
              <View style={{ flexGrow: 0 }}>
                <View style={{ flexDirection: "row" }}>
                  <Pressable style={[styles.btnS, { marginTop: 10 }]}>
                    <Text style={{ color: "#fff", fontWeight: "700" }}>
                      ยืนยัน
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setModalAdd(false)}
                    style={[styles.btnC, { marginTop: 10 }]}
                  >
                    <Text style={{ color: "#fff", fontWeight: "700" }}>
                      ยกเลิก
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
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
  btnS: {
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
    marginRight: 10,
  },
  btnC: {
    backgroundColor: "#EB455F",
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
});
