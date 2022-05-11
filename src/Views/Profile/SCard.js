import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const SCard = () => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.EarnCredit}>S-Rate Cards</Text>

      <View style={styles.cardbg}>
        <ImageBackground
          source={require("../../../assets/card.png")}
          style={styles.card}
        ></ImageBackground>
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  EarnCredit: {
    fontSize: h("3.5%"),
    alignSelf: "center",
    color: mainColor,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardbg: {
    width: "90%",
    height: h("30%"),
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default SCard;
