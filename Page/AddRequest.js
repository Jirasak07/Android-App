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
import React, { useState } from "react";
import { format } from "date-fns";
import FaIcon from "@expo/vector-icons/FontAwesome";
import Fa5Icon from "@expo/vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationContainer } from "@react-navigation/native";

const AddRequest = ({ navigation }) => {
  const [modalAdd, setModalAdd] = useState(false);
  const dateNow = format(new Date(), "yyyy-MM-dd");
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
  return (
    //<Modal animationType="slide" transparent={true} visible={modalAdd}>
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
            <Text style={{ fontWeight: "900", fontSize: 20 }}>จองคิวรถ</Text>
          </View>
          <Pressable
            // onPress={() => navigation.navigate("Booking")}
            style={styles.icon_h}
          >
            <FaIcon name="close" style={{ fontSize: 18 }} />
          </Pressable>
        </View>

        <Text style={{ marginTop: 10, fontWeight: "700" }}>ชื่อผู้จอง : </Text>
        <Text style={{ marginTop: 10, fontWeight: "700" }}>
          วันที่เดินทางไป :
        </Text>

        {datePickerGo && (
          <DateTimePicker
            value={dateGo}
            mode={"date"}
            minimumDate={dateNow}
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
            minimumDate={dateNow}
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
                <Text style={{ color: "#fff", fontWeight: "700" }}>ยืนยัน</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Booking")}
                style={[styles.btnC, { marginTop: 10 }]}
              >
                <Text style={{ color: "#fff", fontWeight: "700" }}>ยกเลิก</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </Modal>
  );
};

export default AddRequest;

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
    padding: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
  },
  btnS: {
    backgroundColor: "#362FD9",
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
});
