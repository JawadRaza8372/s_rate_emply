import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";

const CreditScreen = ({ navigation }) => {
  return (
    <SafeAreaComp>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaComp>
  );
};

export default CreditScreen;

const styles = StyleSheet.create({});
