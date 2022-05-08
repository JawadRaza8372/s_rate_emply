import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg, secColor } from "../../AppColors";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeCustomAuthBtn = ({ title, onClick }) => {
  const [isLoadinCheck, setisLoadinCheck] = useState(false);
  const onClickFun = async () => {
    setisLoadinCheck(true);
    await onClick();
    setisLoadinCheck(false);
  };
  return (
    <TouchableOpacity
      style={{ ...styles.btn, width: "35%", height: h("5%") }}
      onPress={onClickFun}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#DABE9C", "#F2D2A3", "#DABE9C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...styles.btn,
          width: "100%",
          height: h("5%"),
        }}
      >
        {isLoadinCheck ? (
          <ActivityIndicator size={"large"} color={screenBg} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default WelcomeCustomAuthBtn;

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
