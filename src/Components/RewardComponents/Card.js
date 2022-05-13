import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";

const Card = () => {
  return (
    <View style={styles.cardcontainer}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardcontainer: {
    width: "45%",
    height: h("30%"),
    backgroundColor: "red",
  },
});
