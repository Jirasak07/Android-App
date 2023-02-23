import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-paper";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import moment from "moment";
const CarIn = ({ route, navigation }) => {
  const [idcar, setIdCar] = useState(null);
  const [iddriver, setIdDriver] = useState(null);
  const [carin, setCarIn] = useState(null);
  const [id, setId] = useState(route.params.id);
  const [name, setName] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [detail, setDetail] = useState();
  const [car, setCar] = useState();
  const [driver, setDriver] = useState();
  useEffect(() => {
    axios
      .get("http://192.168.10.226/api/show/booking/detail/" + id)
      .then((res) => {
        const daata = res.data.detail[0];
        const start = moment(daata.sdate).format("DD-MMMM-yyyy H:m น.");
        const end = moment(daata.edate).format("DD-MMMM-yyyy H:m น.");
        console.log(start);
        setName(daata.name_user);
        setStart(start);
        setEnd(end);
        setDetail(daata.booking_detail);
      });
  }, []);
  useEffect(() => {
    axios.get("http://192.168.10.226/api/caranddrive/aprove/" + id)
      .then((res) => {
        const car = res.data.car;
        const driver = res.data.driver;
        console.log(driver[0].name);
        setCar(car);
        setDriver(driver);
      });
  },[]);
  const Submit = () => {
    console.log(id);
    axios.patch("http://192.168.10.226/api/Aprove/car/in", {
      id: id,
      car_id: idcar,
      driver_id: iddriver,
      type: 1,
    }).then((res)=>{
      // console.log(res.data)
    })
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: "#edf2f4", paddingHorizontal: 20 }}
    >
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#fff",
          height: 250,
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 19, alignSelf: "center" }}>
          การอนุมัติรายการจอง
        </Text>
        <View style={styles.CardInfo}>
          <Text style={styles.TextInfo}>
            ผู้จอง :{id} {name}
          </Text>
          <Text style={styles.TextInfo}>วันเริ่มต้น : {start} </Text>
          <Text style={styles.TextInfo}>วันสิ้นสุด : {end}</Text>
          <Text style={styles.TextInfo}>สถานที่ : {detail}</Text>
        </View>
      </View>
      <View style={styles.containerSelect}>
        <SelectDropdown
          defaultButtonText={"เลือกรถที่ต้องการ"}
          data={car}
          onSelect={(selectedItem) => {
            setIdCar(selectedItem.id);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem.car_license;
          }}
          rowTextForSelection={(item) => {
            return item.car_license;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#000"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
        <SelectDropdown
          defaultButtonText={"เลือกพนักงานขับ"}
          data={driver}
          onSelect={(selectedItem) => {
            setIdDriver(selectedItem.id);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#000"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.BtnSubmit}
            onPress={() => {
              Submit();
            }}
          >
            <Text style={styles.TextBtn}>บันทึก</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#f02d3a",
              borderRadius: 5,
              padding: 12,
              width: 65,
              alignItems: "center",
            }}
          >
            <AntDesign name="back" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarIn;

const styles = StyleSheet.create({
  dropdown2DropdownStyle: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  dropdown2BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 5,
  },
  dropdown2BtnTxtStyle: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2RowStyle: { backgroundColor: "#fff", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  containerSelect: {
    alignItems: "center",
    flex: 1,
    marginTop: 10,
  },
  BtnSubmit: {
    backgroundColor: "#55a630",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 245,
    marginRight: 5,
  },
  BtnCancel: {
    backgroundColor: "#e63946",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  TextBtn: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  containerBtn: {
    width: "90%",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInfo: {
    fontSize: 16,
    fontWeight: "500",
    color: "#495057",
  },
  CardInfo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
