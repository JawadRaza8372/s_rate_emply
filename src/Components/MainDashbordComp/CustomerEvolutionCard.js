import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { mainColor, screenBg, secColor } from "../../AppColors";
import { w, h } from "react-native-responsiveness";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomerEvolutionCard = ({
	name,
	avtar,
	rating,
	review,
	credits,
	subtitle,
	time,
}) => {
	return (
		<View style={styles.maincarddiv}>
			<View style={styles.imgdiv}>
				<Image
					source={require("../../../assets/shortcard.png")}
					style={styles.imgshow}
				/>
				<Text style={styles.ratingtxt}>{rating}</Text>
			</View>
			<View style={styles.txtContain}>
				<View style={styles.rowcont}>
					<Text style={styles.timetxt}>{time}</Text>
				</View>
				<View style={styles.rowcont}>
					<Image source={{ uri: avtar }} style={styles.avtarimg} />
					<Text style={styles.title}>By {name}</Text>
				</View>
				{review.length > 0 && <Text style={styles.subtitle}>{review}</Text>}
				{credits.length > 0 && (
					<View style={styles.creditdiv}>
						<FontAwesome5 name='money-bill-wave' size={24} color={secColor} />
						<Text style={styles.credits}>{credits} Credits</Text>
						<Image
							source={require("../../../assets/thank1.png")}
							style={styles.thankiumg}
						/>
					</View>
				)}
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
};

export default CustomerEvolutionCard;

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
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
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
		alignItems: "flex-start",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	creditdiv: {
		width: "95%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	imgshow: {
		width: "80%",
		height: "70%",
		resizeMode: "contain",
	},
	timetxt: {
		color: "grey",
		fontSize: h("1.7%"),
	},
	title: {
		fontSize: h("3%"),
		fontWeight: "bold",
		width: "85%",
		alignSelf: "center",
	},
	subtitle: {
		width: "95%",
		alignSelf: "center",
		color: "#202442",
	},
	ratingtxt: {
		fontSize: h("4%"),
		color: screenBg,
		position: "absolute",
		top: h("8%"),
		fontWeight: "bold",
	},
	avtarimg: {
		width: h("4%"),
		height: h("4%"),
		borderRadius: h("4%"),
		overflow: "hidden",
		marginRight: 10,
	},
	credits: {
		fontWeight: "bold",
		fontSize: h("2.2%"),
		marginLeft: 10,
	},
	thankiumg: {
		width: h("5%"),
		height: h("5%"),
		resizeMode: "contain",
	},
});
