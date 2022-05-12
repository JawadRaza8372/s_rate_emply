import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { mainColor } from "../../AppColors";
const MailCard = ({ time, title, subtitle, imglink }) => {
	return (
		<View style={styles.maincarddiv}>
			<View style={styles.imgdiv}>
				<Image source={imglink} style={styles.imgshow} />
			</View>
			<View style={styles.txtContain}>
				<View style={styles.rowcont}>
					<Text style={styles.timetxt}>{time}</Text>
					<Text style={styles.timetxt}>Delete</Text>
				</View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
};

export default MailCard;

const styles = StyleSheet.create({
	maincarddiv: {
		width: w("100%"),
		height: h("20%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginBottom: h("2%"),
		backgroundColor: "#F0F0F4",
	},
	imgdiv: {
		width: "35%",
		height: "100%",
	},
	txtContain: {
		width: "65%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	rowcont: {
		width: "95%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	timetxt: {
		color: "grey",
		fontSize: h("1.7%"),
	},
	title: {
		fontSize: h("3%"),
		fontWeight: "bold",
		color: mainColor,
		width: "95%",
		alignSelf: "center",
	},
	subtitle: {
		width: "95%",
		alignSelf: "center",
		color: "#202442",
	},
});
