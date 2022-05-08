import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenBg } from "../AppColors";

const SafeAreaComp = ({ children }) => {
  return <SafeAreaView style={styles.safeviewcomp}>{children}</SafeAreaView>;
};

export default SafeAreaComp;

const styles = StyleSheet.create({
  safeviewcomp: {
    width: "100%",
    height: "100%",
    backgroundColor: screenBg,
  },
});
