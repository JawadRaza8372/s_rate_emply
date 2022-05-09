import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../../AppColors";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { MaterialIcons } from "@expo/vector-icons";

const FormPolicyField = ({ onChange, value, msg }) => {
  return (
    <>
      <TouchableOpacity
        value={true}
        onPress={onChange}
        style={styles.checkboxContainer}
      >
        <View style={styles.checkbox}>
          {value && (
            <MaterialIcons name="done" size={h("2%")} color={mainColor} />
          )}
        </View>
        <Text style={styles.checkboxtxt}>
          I accept the
          <Text style={styles.activeTxt}>Terms & Conditions</Text> of S•Rate
          application
        </Text>
      </TouchableOpacity>
      {msg && (
        <View style={styles.showmsg}>
          <ErrorMessage error={"Please Agree with terms."} visible={msg} />
        </View>
      )}
    </>
  );
};

export default FormPolicyField;

const styles = StyleSheet.create({
  checkbox: {
    width: h("2.5%"),
    height: h("2.5%"),
    borderWidth: 1,
    borderColor: "#94A3BE",
    borderRadius: h("0.5%"),
    marginRight: 10,
  },
  checkboxContainer: {
    width: w("88%"),
    display: "flex",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
    marginVertical: h("2%"),
  },
  checkboxtxt: {
    width: "80%",
    fontSize: h("1.9%"),
  },
  activeTxt: {
    fontWeight: "bold",
    color: mainColor,
    textDecorationLine: "underline",
    textDecorationColor: mainColor,
  },
  showmsg: {
    width: w("88%"),
    alignSelf: "center",
    marginBottom: h("2%"),
  },
});
