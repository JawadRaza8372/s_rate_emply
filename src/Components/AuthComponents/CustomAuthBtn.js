import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg } from "../../AppColors";
const CustomAuthBtn = ({ title, bgColor, onClick }) => {
  const [isLoadinCheck, setisLoadinCheck] = useState(false);
  const onClickFun = async () => {
    setisLoadinCheck(true);
    await onClick();
    setisLoadinCheck(false);
  };
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        width: "60%",
        backgroundColor: bgColor ? bgColor : mainColor,
        height: h("6%"),
      }}
      onPress={onClickFun}
    >
      {isLoadinCheck ? (
        <ActivityIndicator size={"large"} color={screenBg} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomAuthBtn;

const styles = StyleSheet.create({
  btn: {
    height: h("5%"),
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: h("5%"),
  },
  text: {
    fontSize: h("2.8%"),
    fontWeight: "bold",
    color: mainColor,
  },
});
