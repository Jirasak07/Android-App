import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import Dialog from "react-native-dialog";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { format } from 'date-fns'
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
function Calendarr() {
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    setVisible(false);
  };
  const dateNow = format(new Date(),'yyyy-MM-dd');

  const [markedDate, setMarkedDate] = useState([]);
  useEffect(() => {
    setMarkedDate({
      "2023-02-13": { selected: true, marked: true, selectedColor: "blue" },
      "2023-02-14": { marked: true },
      "2023-02-15": { marked: true, dotColor: "red", activeOpacity: 0 },
      "2023-02-16": { disabled: true, disableTouchEvent: true },
    });
  },[]);
  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button
          color={"#007ff9"}
          label="Cancel"
          onPress={handleCancel}
        />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>

      <Calendar
        minDate={dateNow}
        locales={"th"}
        style={{ borderRadius: 10, padding: 10 }}
        markingType={"period"}
        markedDates={markedDate}
        calendarWidth={320}
        onDayPress={(day) => {
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
        theme={{
          selectedDayTextColor: "#ffffff",
          todayTextColor: "white",
          todayBackgroundColor: "skyblue",
        }}
        hideExtraDays={true}
      />
    </View>
  );
}

export default Calendarr;
