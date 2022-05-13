import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg } from "../../AppColors";
import Card from "../../Components/RewardComponents/Card";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
const RewardDetailScreen = ({ navigation }) => {
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
			<View style={styles.maindiv}>
				<ScrollView>
					<Image
						source={require("../../../assets/detimg.png")}
						style={styles.imgdetail}
					/>
					<Text style={styles.pricecredit}>100 Credits</Text>
					<Text style={styles.mycredits}>You have 100 Credits</Text>
					<CustomAuthBtn
						title={"Purchase"}
						onClick={() => navigation.navigate("PurchaseSuccess")}
					/>
					<Text style={styles.descript}>
						THE ONLY PATENTED CHIN SUPPORT TRAVEL PILLOW THAT STOPS YOUR HEAD
						FROM FALLING FORWARD - The innovative overlap design wraps gently
						around the neck providing added chin cushion that can be adjusted to
						personal comfort levels while maintaining all round comfort and
						simultaneous support for the head, neck, and chin. Our patented
						design eliminates the bobble head effect for a more comfortable
						sleep on-the-go.
					</Text>
					<Text style={styles.morerward}>More Rewards</Text>
					<View style={styles.rewardcont}>
						{cardsarr.map((dat, index) => (
							<Card
								key={index}
								title={dat.title}
								imglink={dat.imglink}
								credits={dat.credits}
								alert={true}
							/>
						))}
					</View>
				</ScrollView>
			</View>
		</SafeAreaComp>
	);
};

export default RewardDetailScreen;

const styles = StyleSheet.create({
	maindiv: {
		width: w("100%"),
		height: h("100%"),
		backgroundColor: screenBg,
	},
	imgdetail: {
		width: w("100%"),
		height: h("35%"),
		resizeMode: "cover",
	},
	descript: {
		width: "80%",
		alignSelf: "center",
		marginVertical: h("3%"),
		fontSize: h("2.5%"),
	},
	rewardcont: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	mycredits: {
		fontSize: h("2%"),
		textAlign: "center",
		color: "#202442",
		marginBottom: h("3%"),
	},
	pricecredit: {
		fontSize: h("4%"),
		textAlign: "center",
		color: mainColor,
		fontWeight: "bold",
		marginVertical: h("3%"),
	},
	morerward: {
		fontSize: h("4%"),
		width: "90%",
		alignSelf: "center",
		color: mainColor,
		fontWeight: "bold",
		marginVertical: h("3%"),
	},
});
