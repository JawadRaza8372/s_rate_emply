import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { mainColor, secColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const SplashScreenSec = () => {
  return (
    <View style={styles.splashbg}>
      <Image
        source={require("../../assets/s_ratedlogo.png")}
        style={styles.imgshow}
      />
      <Text style={styles.loadingtext}>Loading, please wait…</Text>
    </View>
  );
};

export default SplashScreenSec;

const styles = StyleSheet.create({
  splashbg: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColor,
  },
  imgshow: {
    width: w("70%"),
    height: w("35%"),
    resizeMode: "contain",
  },
  loadingtext: {
    fontSize: h("2%"),
    color: secColor,
  },
});
