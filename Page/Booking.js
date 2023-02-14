import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import globalStyles from "../Style/globalStyle";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { format } from "date-fns";
import FaTcon from "@expo/vector-icons/FontAwesome";
import Fa5Icon from "@expo/vector-icons/FontAwesome5";
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
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    setVisible(false);
  };
  const dateNow = format(new Date(), "yyyy-MM-dd");

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
            onPress={(dateNow) => console.log(dateNow)}
          >
            <FaTcon
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
    </View>
  );
}
