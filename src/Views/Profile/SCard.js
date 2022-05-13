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

const SCard = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.EarnCredit}>S-Rate Cards</Text>

      <View style={styles.cardbg}>
        <Image
          source={require("../../../assets/card.png")}
          style={styles.card}
        />
        <Text style={styles.Text}>12344ABC</Text>
      </View>
      <View style={styles.cardbg}>
        <Image
          source={require("../../../assets/card.png")}
          style={styles.card}
        />
        <Text style={styles.Text}>524564AB</Text>
      </View>
      <View style={styles.cardbg}>
        <Image
          source={require("../../../assets/card.png")}
          style={styles.card}
        />
        <Text style={styles.Text}>25844ABC</Text>
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
    // backgroundColor: "gold",
    alignSelf: "center",
  },
  cardbg: {
    width: "90%",
    height: h("27%"),

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  Text: {
    position: "absolute",
    top: 130,
    color: "#fff",
    fontWeight: "bold",
    fontSize: h("4%"),
  },
});

export default SCard;
