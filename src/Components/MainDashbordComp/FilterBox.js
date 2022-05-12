import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FilterBox = () => {
	return (
		<View style={styles.filterdiv}>
			<Text style={styles.filtertxt}>Filters</Text>
			<MaterialCommunityIcons
				name='tune-variant'
				size={h("3.5%")}
				color='black'
			/>
		</View>
	);
};

export default FilterBox;

const styles = StyleSheet.create({
	filterdiv: {
		width: w("95%"),
		height: h("5%"),
		backgroundColor: "#E8E8E4",
		borderRadius: h("5%"),
		alignSelf: "center",
		marginVertical: h("2%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		paddingHorizontal: h("2%"),
	},
	filtertxt: {
		fontSize: h("2.3%"),
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});
