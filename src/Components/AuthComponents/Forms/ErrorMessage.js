import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 5,
    // width: w("88%"),
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ErrorMessage;
