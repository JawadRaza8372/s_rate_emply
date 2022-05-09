import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg, secColor } from "../../AppColors";

const HeaderComponet = () => {
  const styles = StyleSheet.create({
    maindiv: {
      width: w("100%"),
      height: h("4%"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },

    infoContin: {
      width: h("23%"),
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      flexDirection: "column",
    },
    name: {
      fontSize: h("2%"),
    },

    credits: {
      fontSize: h("2%"),
    },
    seprators1: {
      width: "35%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
    seprators: {
      width: "65%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
  });
  return (
    <View style={styles.maindiv}>
      <View style={styles.seprators1}></View>
      <View style={styles.seprators}>
        <View style={styles.infoContin}>
          <Text style={styles.name}>Name</Text>
        </View>
        <Text style={styles.credits}>Credits</Text>
      </View>
    </View>
  );
};

export default HeaderComponet;

const styles = StyleSheet.create({});
