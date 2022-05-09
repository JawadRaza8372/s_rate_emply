import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const PersonalInfo = ({ navigation }) => {
  const [Active, setActive] = useState(false);

  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.EarnCredit}> Personal & Work info</Text>

      {/* Top header  */}
      <View style={styles.BarLine}>
        <View style={styles.Toplinebar}>
          <TouchableOpacity
            onPress={() => {
              setActive(true);
            }}
          >
            <Text style={Active ? styles.BarText : styles.BarText2}>
              Personal info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive(false);
            }}
          >
            <Text style={Active === false ? styles.BarText : styles.BarText2}>
              Work info
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        {Active ? (
          <View style={styles.Circle} />
        ) : (
          <View style={styles.Circle2} />
        )}
      </View>
      {/* Top header  */}
      <View style={styles.leftHeader}>
        <View style={styles.RightContainer2}>
          <Image
            style={styles.ImgIcon}
            source={require("../../../assets/ig1.png")}
          />
        </View>
        <Text>Edit info</Text>
      </View>

      {/* Profile */}
      <View style={styles.ImageContainer}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={require("../../../assets/profileImage.png")}
        />
      </View>
      {/* Profile */}
    </SafeAreaComp>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  EarnCredit: {
    fontSize: h("3.5%"),
    alignSelf: "center",
    color: mainColor,
    fontWeight: "bold",
  },
  EarnSubCredit: {
    fontSize: h("2%"),
    alignSelf: "center",
    color: mainColor,
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
  },
  BarLine: {
    // backgroundColor: "red",
    width: "100%",
    height: h("8%"),
  },
  Toplinebar: {
    flexDirection: "row",
    width: "100%",
    height: "90%",
    // backgroundColor: "gold",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: h("1%"),
  },
  BarText: {
    color: mainColor,
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  BarText2: {
    color: mainColor,
    fontSize: h("2%"),
  },
  line: {
    backgroundColor: mainColor,
    width: "100%",
    height: h("0.2%"),
  },
  Circle: {
    backgroundColor: mainColor,
    width: 15,
    height: 15,
    borderRadius: h("100%"),
    position: "absolute",
    top: 50,
    left: 115,
  },
  Circle2: {
    backgroundColor: mainColor,
    width: 15,
    height: 15,
    borderRadius: h("100%"),
    position: "absolute",
    top: 50,
    left: 275,
  },
  ImageContainer: {
    width: 180,
    height: 180,
    borderRadius: 1000 / 2,
    borderColor: mainColor,
    borderWidth: 1,
  },
  leftHeader: {
    // backgroundColor: "red",
    width: "40%",
    height: h("4%"),
    marginTop: h("1%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  ImgIcon: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  RightContainer2: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
