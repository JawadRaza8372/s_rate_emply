import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather, Zocial } from "@expo/vector-icons";
import { inputBg, mainColor, stopColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomInput = ({
  title,
  placeholder,
  onChange,
  onBlur,
  error,
  ...otherProps
}) => {
  return (
    <View
      style={{
        ...styles.customInptdiv,
        borderColor: error ? stopColor : "#94A3BE",
      }}
    >
      <Text
        style={{ ...styles.titletxt, color: error ? stopColor : "#202442" }}
      >
        {title}
      </Text>
      <TextInput
        style={{
          ...styles.custminp,
          width: "100%",
          paddingHorizontal: 10,
        }}
        onChangeText={onChange}
        placeholder={`${placeholder}`}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        onBlur={onBlur}
        {...otherProps}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  customInptdiv: {
    width: w("88%"),
    borderRadius: h("1%"),
    height: h("8%"),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  custminp: {
    height: h("5%"),
  },
  titletxt: {
    fontSize: h("1.7%"),
    textTransform: "capitalize",
  },
});
