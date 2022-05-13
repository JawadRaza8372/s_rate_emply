import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
const RatingEmpojiComponent = ({ question, selectedtext }) => {
	return (
		<View style={styles.colmndiv}>
			<Text style={styles.question}>{question}</Text>
			<View style={styles.rowcont}>
				<FontAwesome5
					name='angry'
					size={h("4%")}
					color={selectedtext === "angry" ? "#C91C14" : "#8392AF"}
				/>
				<MaterialCommunityIcons
					name='emoticon-confused-outline'
					size={h("5%")}
					color={selectedtext === "confuse" ? "#D17A00" : "#8392AF"}
				/>
				<MaterialCommunityIcons
					name='emoticon-neutral-outline'
					size={h("5%")}
					color={selectedtext === "neutral" ? "#B88D00" : "#8392AF"}
				/>
				<MaterialCommunityIcons
					name='emoticon-happy-outline'
					size={h("5%")}
					color={selectedtext === "happy" ? "#2EA86F" : "#8392AF"}
				/>
				<FontAwesome5
					name='grin-stars'
					size={h("4%")}
					color={selectedtext === "very happy" ? "#107E55" : "#8392AF"}
				/>
			</View>
		</View>
	);
};

export default RatingEmpojiComponent;

const styles = StyleSheet.create({
	rowcont: {
		width: w("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	colmndiv: {
		width: w("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		marginBottom: h("2%"),
	},
	question: {
		width: "90%",
		fontWeight: "bold",
		marginBottom: h("1%"),
	},
});
