import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
const Card = ({ imglink, credits, title, code, alert, onClick }) => {
	return (
		<View style={styles.cardcontainer}>
			<Image source={imglink} style={styles.imgshoiw} />
			<View style={styles.textCont}>
				<Text style={styles.prizename}>{title}</Text>
				{credits && (
					<TouchableOpacity onPress={onClick} style={styles.rowcont}>
						<FontAwesome5 name='shopping-basket' size={h("2%")} color='black' />
						<Text style={styles.price}>{credits} Credits</Text>
						<AntDesign name='arrowright' size={h("2.7%")} color='black' />
					</TouchableOpacity>
				)}
				{code && <Text style={styles.price}>{code}</Text>}

				{alert && <Text style={styles.alerttxt}>Not Enough Credits</Text>}
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	cardcontainer: {
		width: "45%",
		height: h("30%"),
		backgroundColor: "#F0F0F4",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		marginBottom: h("1%"),
		marginHorizontal: w("2%"),
	},
	imgshoiw: {
		width: "100%",
		height: "50%",
		resizeMode: "cover",
	},
	textCont: {
		width: "100%",
		height: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	rowcont: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	prizename: {
		fontSize: h("2.3%"),
		width: "85%",
		alignSelf: "center",
		color: "#202442",
	},
	alerttxt: {
		fontSize: h("1.8%"),
		textAlign: "center",
		width: "100%",
		color: "#52576F",
	},
	price: {
		fontSize: h("2.5%"),
		fontWeight: "bold",
	},
});
