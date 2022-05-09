import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";

const CreditScreen = () => {
  return (
    <SafeAreaComp>
      <View>
        <Text>CreditScreen</Text>
      </View>
    </SafeAreaComp>
  );
};

export default CreditScreen;

const styles = StyleSheet.create({});
