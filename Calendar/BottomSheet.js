import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  withTiming,
} from "react-native-reanimated";
import AddRequest from "../Page/AddRequest";
const windowHeight = Dimensions.get("window").height;
const BottomSheets = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const translateYx = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateYx.value };
    })
    .onUpdate((ev) => {
      translateYx.value = ev.translationY + context.value.y;
      translateYx.value = Math.max(translateYx.value, -windowHeight / 1.3);
      console.log(translateYx.value);
      console.log(_WORKLET);
    })
    .onEnd(() => {
      if (translateYx.value > -windowHeight / 3.5) {
        translateYx.value = withSpring(70);
        runOnJS(updateShare)(true);
      } else {
        translateYx.value = withSpring(-windowHeight / 1.4, { damping: 150 });
      }
    });
  function updateShare(val) {
    setModalVisible(false);
  }
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateYx.value }] };
  });
  const openSheet = () => {
    translateYx.value = withSpring(-windowHeight / 1.4, { damping: 20 });
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          openSheet();
        }}
        style={{
            marginHorizontal:5,
            alignItems:'center',
            paddingLeft:2    
    }}
      >
        <Ionicons name="add-circle-outline" size={45} color={'gray'}  />
      </TouchableOpacity>
      <View>
        <BottomSheet
          visible={modalVisible}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={gesture}>
              <Animated.View style={[styles.BottomSheetst, rBottomSheetStyle]}>
              <View
                style={{
                  width: 75,
                  height: 5,
                  backgroundColor: "grey",
                  alignSelf: "center",
                  marginVertical: 15,
                  borderRadius: 2,
                  opacity: 0.3,
                }}
              />
                <View style={{flex:1}} >
          <AddRequest/>
                </View>
              </Animated.View>
            </GestureDetector>
          </GestureHandlerRootView>
        </BottomSheet>
      </View>
    </>
  );
};

export default BottomSheets;

const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: "#000",
    borderRadius: 100,
  },
  BottomSheetst: {
    backgroundColor: "white",
    height: windowHeight,
    top: windowHeight,
    borderRadius: 25,
    width: "100%",
    position: "absolute",
  },
});
