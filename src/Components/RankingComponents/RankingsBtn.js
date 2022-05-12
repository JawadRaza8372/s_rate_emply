import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor } from "../../AppColors";
import { FontAwesome5 } from "@expo/vector-icons";

const RankingsBtn = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btn, marginBottom: h("1%") }}
      onPress={onClick}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#DABE9C", "#F2D2A3", "#DABE9C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...styles.btn,
          width: "100%",
          height: "100%",
        }}
      >
        <FontAwesome5 name="crown" size={h("2%")} color={mainColor} />
        <Text style={styles.text}>Top 3 Monthly Gifts</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RankingsBtn;

const styles = StyleSheet.create({
  btn: {
    width: w("60%"),
    height: h("5%"),
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: h("5%"),
  },
  text: {
    fontSize: h("2%"),
    fontWeight: "bold",
    color: mainColor,
    marginLeft: w("2%"),
  },
});
