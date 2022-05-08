import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../AppColors";
const SplashScreen = () => {
  const [imgIndex, setimgIndex] = useState(0);
  const imagesAr = [
    { img: require("../../assets/face_neutralGold.png") },
    { img: require("../../assets/face_happyGold.png") },
    { img: require("../../assets/face_starsGold.png") },
  ];
  // useEffect(() => {
  //   setInterval(() => {
  //     if (imgIndex < imagesAr.length) {
  //       setimgIndex(imgIndex + 1);
  //     } else {
  //       setimgIndex(0);
  //     }
  //   }, 1900);
  // }, []);

  return (
    <View style={styles.splashbg}>
      <Image source={imagesAr[imgIndex].img} style={styles.imgshow} />
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
