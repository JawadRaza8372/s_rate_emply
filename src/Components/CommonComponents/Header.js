import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Header = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainController}>
      {/* left Header */}
      <View style={styles.BackArrow}>
        <Image
          style={styles.BackButtonImage}
          source={require("../../../assets/backbutton.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainController: {
    // backgroundColor: "red",
    width: w("100%"),
    height: h("7.5%"),
  },
  BackArrow: {
    // backgroundColor: "gold",
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  BackButtonImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
