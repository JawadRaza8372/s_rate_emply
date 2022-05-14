import {
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Text,
	View,
} from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
import MailCard from "../../Components/MainDashbordComp/MailCard";
import FilterBox from "../../Components/MainDashbordComp/FilterBox";

const EmailInboxScreen = ({ navigation }) => {
	const emaildata = [
		{
			title: "New Evaluation",
			subtitle: "Well done! You have a new evaluation from customer!",
			time: "Today, 13:00",
			imglink: require("../../../assets/happypiuc.png"),
		},
		{
			title: "New Customer",
			subtitle: "Congratulations! You registered a new customer!",
			time: "Today, 13:00",
			imglink: require("../../../assets/addperpic.png"),
		},
		{
			title: "Congratulations",
			subtitle:
				"Welcome to S-Rate! Receive evaluations from customers and build up your career!",
			time: "Today, 13:00",
			imglink: require("../../../assets/logopic.png"),
		},
	];
	return (
		<SafeAreaComp>
			<View style={styles.headerContent}>
				<Header onPress={() => navigation.goBack()} />
				<Text style={styles.maineading}>Inbox</Text>
			</View>
			<FilterBox />
			<ScrollView>
				{emaildata.map((dat, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => navigation.navigate("EvolutionScore")}>
						<MailCard
							time={dat.time}
							title={dat.title}
							subtitle={dat.subtitle}
							imglink={dat.imglink}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		</SafeAreaComp>
	);
};

export default EmailInboxScreen;

const styles = StyleSheet.create({
	headerContent: {
		width: "100%",
		height: h("13%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	maineading: {
		fontSize: h("4%"),
		fontWeight: "bold",
		textAlign: "center",
		color: mainColor,
	},
});
