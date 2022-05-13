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
import { LinearGradient } from "expo-linear-gradient";
import { mainColor, screenBg } from "../../AppColors";
import { Ionicons } from "@expo/vector-icons";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";
import Card from "../../Components/RewardComponents/Card";

const Reward = () => {
	const [Active, setActive] = useState(true);
	const [Edit, setEdit] = useState(false);
	const cardsarr = [
		{
			title: "10€ Amazon Voucher",
			credits: "100",
			imglink: require("../../../assets/prize1.png"),
		},
		{
			title: "10€ Playstation Voucher",
			credits: "200",
			imglink: require("../../../assets/prize.png"),
		},
		{
			title: "10€ Playstation Voucher",
			credits: "150",
			imglink: require("../../../assets/prize1.png"),
		},
	];
	return (
		<SafeAreaComp>
			<Text style={styles.EarnCredit}>Rewards</Text>
			<Text style={styles.EarnSubCredit}>
				Redeem your Credits to amazing rewards!
			</Text>

			<View style={styles.MainRoundContainer}>
				<Text style={styles.creditScores}>Your Credits: 100</Text>
			</View>

			{/* Top header  */}
			<View style={styles.BarLine}>
				<View style={styles.Toplinebar}>
					<TouchableOpacity
						onPress={() => {
							setActive(true);
						}}>
						<Text style={Active ? styles.BarText : styles.BarText2}>
							Available
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setActive(false);
						}}>
						<Text style={Active === false ? styles.BarText : styles.BarText2}>
							Purchased
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.line} />
				{Active ? (
					<View style={styles.Circle} />
				) : (
					<View style={styles.Circle2} />
				)}
			</View>
			{/* Top header  */}

			<ScrollView
				contentContainerStyle={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					flexDirection: "row",
					flexWrap: "wrap",
				}}>
				{Active ? (
					cardsarr.map((dat, index) => (
						<Card
							key={index}
							title={dat.title}
							imglink={dat.imglink}
							credits={dat.credits}
							alert={true}
						/>
					))
				) : (
					<Card
						imglink={require("../../../assets/prize.png")}
						code='t2h45hd8'
						title={"10€ Playstation Voucher"}
					/>
				)}
			</ScrollView>
		</SafeAreaComp>
	);
};

const styles = StyleSheet.create({
	EarnCredit: {
		fontSize: h("3.5%"),
		alignSelf: "center",
		color: mainColor,
		fontWeight: "bold",
		marginTop: h("3%"),
	},
	EarnSubCredit: {
		fontSize: h("2%"),
		alignSelf: "center",
		color: mainColor,
		paddingLeft: h("2%"),
		paddingRight: h("2%"),
	},
	MainRoundContainer: {
		width: "90%",
		height: h("6%"),
		backgroundColor: "#0003",
		alignSelf: "center",
		borderRadius: h("100%"),
		marginTop: h("2%"),
		justifyContent: "center",
		alignItems: "center",
	},

	creditScores: {
		color: mainColor,
		fontSize: h("2.6%"),
		fontWeight: "bold",
	},
	BarLine: {
		// backgroundColor: "red",
		width: "100%",
		height: h("8%"),
	},
	Toplinebar: {
		flexDirection: "row",
		width: "100%",
		height: "90%",
		// backgroundColor: "gold",
		justifyContent: "space-evenly",
		alignItems: "flex-end",
		paddingBottom: h("1%"),
	},
	BarText: {
		color: mainColor,
		fontSize: h("2%"),
		fontWeight: "bold",
	},
	BarText2: {
		color: mainColor,
		fontSize: h("2%"),
	},
	line: {
		backgroundColor: "#CFD4E0",
		width: "100%",
		height: h("0.2%"),
		marginBottom: h("2%"),
	},
	Circle: {
		backgroundColor: mainColor,
		width: 7,
		height: 7,
		borderRadius: h("100%"),
		position: "absolute",
		top: 50,
		left: 100,
	},
	Circle2: {
		backgroundColor: mainColor,
		width: 7,
		height: 7,
		borderRadius: h("100%"),
		position: "absolute",
		top: 50,
		left: 250,
	},
});

export default Reward;
