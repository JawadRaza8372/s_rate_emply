import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
const SplashScreen = ({ navigation }) => {
  const [imgIndex, setimgIndex] = useState(
    require("../../../assets/face_neutralGold.png")
  );

  useEffect(() => {
    setTimeout(() => {
      setimgIndex(require("../../../assets/face_happyGold.png"));
    }, 1500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setimgIndex(require("../../../assets/face_starsGold.png"));
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SplashScreenSec");
    }, 3500);
  }, []);

  return (
    <View style={styles.splashbg}>
      <Image source={imgIndex} style={styles.imgshow} />
    </View>
  );
};

export default SplashScreen;

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
    width: w("20%"),
    height: w("20%"),
    resizeMode: "contain",
  },
});
