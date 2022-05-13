import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenBg } from "../../AppColors";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { w, h } from "react-native-responsiveness";
const SafeAreaComp = ({ children }) => {
	return <SafeAreaView style={styles.safeviewcomp}>{children}</SafeAreaView>;
};

export default SafeAreaComp;

const styles = StyleSheet.create({
	safeviewcomp: {
		width: w("100%"),
		height: h("100%"),
		backgroundColor: screenBg,
	},
});
