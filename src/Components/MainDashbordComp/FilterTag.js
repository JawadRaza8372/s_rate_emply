import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { w, h } from "react-native-responsiveness";
const FilterTag = () => {
	return (
		<View style={styles.filtertagdiv}>
			<Text style={styles.txtcolor}>Tropical Hotle</Text>
			<AntDesign name='closecircle' size={h("2%")} color='black' />
		</View>
	);
};

export default FilterTag;

const styles = StyleSheet.create({
	filtertagdiv: {
		width: w("35%"),
		height: h("3%"),
		display: "flex",
		alignItems: "center",
		backgroundColor: "#E8E8E4",
		borderRadius: h("3%"),
		marginRight: h("0.6%"),
		marginBottom: h("0.3%"),
		justifyContent: "space-between",
		paddingHorizontal: 10,
		flexDirection: "row",
	},
	txtcolor: {
		fontSize: h("1.8%"),
	},
});
