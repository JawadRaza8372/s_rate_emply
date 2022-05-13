import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { screenBg } from "../../AppColors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ThankCard = ({ imglink, text, isActive, onClick, isHiden }) => {
	return (
		<View
			style={{
				...styles.maincard,
				backgroundColor: isActive ? screenBg : "#F0F0F4",
				height: isHiden === true ? h("25%") : h("18%"),
			}}>
			{isHiden !== true ? (
				<TouchableOpacity onPress={onClick} style={styles.markdiv}>
					{isActive === true && (
						<MaterialIcons name='done' size={h("2.5%")} color='black' />
					)}
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onClick} style={styles.closediv}>
					<AntDesign name='close' size={24} color='black' />
				</TouchableOpacity>
			)}
			<View style={styles.rowcont}>
				<Image source={imglink} style={styles.thankimg} />
				<Text style={styles.thanktxt}>{text}</Text>
			</View>
		</View>
	);
};

export default ThankCard;

const styles = StyleSheet.create({
	maincard: {
		width: w("100%"),
		overflow: "hidden",
		marginBottom: h("2%"),
		position: "relative",
	},
	rowcont: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	thankimg: {
		width: "42%",
		height: "80%",
		resizeMode: "contain",
	},
	thanktxt: {
		width: "40%",
		textAlign: "center",
		fontSize: h("3%"),
	},
	markdiv: {
		width: h("3%"),
		height: h("3%"),
		backgroundColor: screenBg,
		borderWidth: 1,
		borderColor: "grey",
		position: "absolute",
		top: 10,
		left: 10,
		overflow: "hidden",
		zIndex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	closediv: {
		width: h("3%"),
		height: h("3%"),
		position: "absolute",
		top: 10,
		right: 10,
		overflow: "hidden",
		zIndex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});
