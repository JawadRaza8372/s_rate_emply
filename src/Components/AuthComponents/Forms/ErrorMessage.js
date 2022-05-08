import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ErrorMessage;
