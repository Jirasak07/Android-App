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
  Button,
} from "react-native";
import React, { useState } from "react";
import { format } from "date-fns";
import FaIcon from "@expo/vector-icons/FontAwesome";
import Fa5Icon from "@expo/vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationContainer } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddRequest = ({ navigation }) => {
  const [modalAdd, setModalAdd] = useState(false);
  const dateNow = format(new Date(), "yyyy-MM-dd");
  //เดินทางไป
  //date
  const [selectedDateGo, setSelectedDateGo] = useState(new Date());
  const [datePickerVisibleGo, setDatePickerVisibleGo] = useState(false);

  const showDatePickerGo = () => {
    setDatePickerVisibleGo(true);
  };

  const hideDatePickerGo = () => {
    setDatePickerVisibleGo(false);
  };

  const handleConfirmGo = (date) => {
    setSelectedDateGo(date);
    hideDatePickerGo();
  };

  //time
  const [selectedTimeGo, setSelectedTimeGo] = useState(new Date());
  const [timePickerVisibleGo, setTimePickerVisibleGo] = useState(false);

  const showTimePickerGo = () => {
    setTimePickerVisibleGo(true);
  };

  const hideTimePickerGo = () => {
    setTimePickerVisibleGo(false);
  };

  const handleTimeConfirmGo = (date) => {
    setSelectedTimeGo(date);
    hideTimePickerGo();
  };
  //เดินทางกลับ

  //date
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  //time
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (date) => {
    setSelectedTime(date);
    hideTimePicker();
  };
  return (
    //<Modal animationType="slide" transparent={true} visible={modalAdd}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#424C55",
            borderBottomWidth: 0.5,
          }}
        >
          <View style={[styles.text_h, { paddingBottom: 5 }]}>
            <Text style={{ fontWeight: "900", fontSize: 20 }}>จองคิวรถ</Text>
          </View>
        </View>

        <Text style={{ marginTop: 10, fontWeight: "700" }}>ชื่อผู้จอง : </Text>
        <DateTimePickerModal
          date={selectedDateGo}
          isVisible={datePickerVisibleGo}
          mode="date"
          onConfirm={handleConfirmGo}
          onCancel={hideDatePickerGo}
          minimumDate={new Date(Date.now())}
        />

        <DateTimePickerModal
          date={selectedTimeGo}
          isVisible={timePickerVisibleGo}
          mode="time"
          onConfirm={handleTimeConfirmGo}
          onCancel={hideTimePickerGo}
          locale="th"
        />

        <Text style={{ marginTop: 10, fontWeight: "700" }}>
          วันที่เดินทางไป :
        </Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#20262E",
              width: 200,
            }}
          >
            <Text style={{ paddingTop: 5 }}>
              {selectedDateGo.toDateString()}{" "}
              {selectedTimeGo.toLocaleTimeString("en-US")}
            </Text>
          </View>
          <View style={{ margin: 5 }}>
            <FaIcon
              name="calendar"
              onPress={showDatePickerGo}
              style={{ fontSize: 20 }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <FaIcon
              name="clock-o"
              onPress={showTimePickerGo}
              style={{ fontSize: 20 }}
            />
          </View>
        </View>

        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date(Date.now())}
        />

        <DateTimePickerModal
          date={selectedTime}
          isVisible={timePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
          locale="th"
        />

        <Text style={{ marginTop: 10, fontWeight: "700" }}>
          วันที่เดินทางกลับ :
        </Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#20262E",
              width: 200,
            }}
          >
            <Text style={{ paddingTop: 5 }}>
              {selectedDate.toDateString()}{" "}
              {selectedTime.toLocaleTimeString("en-US")}
            </Text>
          </View>
          <View style={{ margin: 5 }}>
            <FaIcon
              name="calendar"
              onPress={showDatePicker}
              style={{ fontSize: 20 }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <FaIcon
              name="clock-o"
              onPress={showTimePicker}
              style={{ fontSize: 20 }}
            />
          </View>
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
                //onPress={() => navigation.navigate("Booking")}
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
