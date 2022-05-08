import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
const SplashScreen = () => {
  const [imgIndex, setimgIndex] = useState(
    require("../../../assets/face_neutralGold.png")
  );
  const imagesAr = [
    { img: require("../../../assets/face_neutralGold.png") },
    { img: require("../../../assets/face_happyGold.png") },
    { img: require("../../../assets/face_starsGold.png") },
  ];
  const switchimg = () => {};
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
