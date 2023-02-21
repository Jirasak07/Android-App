import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Alert,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Data } from "./data";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome } from "@expo/vector-icons";

const TestSwipe = () => {
  let rowRefs = new Map();
  const RenderRight = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [0, -0.8],
    });

    console.log(trans);
    return (
      <Animated.View
        style={{
          width: 190,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "space-evenly",
          opacity: trans,
          marginRight: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 80,
            width: 80,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="check" size={30} color={"green"} />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 80,
            width: 80,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="trash-o" size={30} color={"red"} />
        </View>
      </Animated.View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Swipeable
        key={item.id}
        ref={(ref) => {
          if (ref && !rowRefs.get(item.id)) {
            rowRefs.set(item.id, ref);
          }
        }}
        useNativeAnimations
        overshootRight={false}
        overshootLeft={false}
        renderRightActions={RenderRight}
        renderLeftActions={() => {
          return <View style={{ width: 150 }}></View>;
        }}
        onSwipeableRightWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            if (key !== item.id && ref) {
              ref.close();
            } else {
              setTimeout(() => {
                ref.close();
              }, 600);
              //   Alert.alert(JSON.stringify(item.id), "My Alert Msg", [
              //     {
              //       text: "ตกลง",
              //       onPress: () => ref.close(),
              //     },
              //   ]);
            }
          });
        }}
        onSwipeableLeftWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            if (key !== item.id && ref) {
              ref.close();
            } else {
              Alert.alert(JSON.stringify(item.id), "My Alert Msg", [
                {
                  text: "บันทึก",
                  onPress: () => ref.close(),
                },
                {
                  text: "ยกเลิก",
                  onPress: () => ref.close(),
                },
              ]);
            }
          });
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          key={item.id}
          style={{
            flex: 1,
            backgroundColor: "white",
            flexDirection: "row",
            marginVertical: 5,
            height: 80,
            borderRadius: 5,
            // marginHorizontal: 10,
          }}
        >
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.Message}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#eeee", paddingTop: 25 ,paddingHorizontal:10}}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        style={{ flexlex: 1 }}
      />
    </View>
  );
};

export default TestSwipe;

const styles = StyleSheet.create({});
