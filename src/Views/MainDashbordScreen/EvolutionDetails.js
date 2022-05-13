import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";
import { w, h } from "react-native-responsiveness";
import RatingEmpojiComponent from "../../Components/MainDashbordComp/RatingEmpojiComponent";
import TrueFalseQuestion from "../../Components/MainDashbordComp/TrueFalseQuestion";
import { screenBg, secColor } from "../../AppColors";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import { FontAwesome5 } from "@expo/vector-icons";
const EvolutionDetails = ({ navigation }) => {
	const skillsQuestion = [
		{ question: "How EFFICIENT was the employee:", selectedValue: "happy" },
		{ question: "How QUICK was the employee:", selectedValue: "very happy" },
		{ question: "How PROACTIVE was the employee:", selectedValue: "neutral" },
	];
	const ApperanceQuestion = [
		{ question: "Uniform’s condition:", selectedValue: "angry" },
		{ question: "Hygiene:", selectedValue: "confuse" },
	];
	const vaccinequestion = [
		{
			question: "Was the employee wearing mask at all times?",
			selectedValue: false,
		},
		{
			question: "Was the employee wearing gloves at all times?",
			selectedValue: false,
		},
		{
			question:
				"Was the employee performed social distancing with all customers at all times?",
			selectedValue: true,
		},
	];
	return (
		<SafeAreaComp>
			<Header onPress={() => navigation.goBack()} />
			<ScrollView>
				<View style={styles.rowcont}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
						}}
						style={styles.avtar}
					/>
					<Text style={styles.nametxt}>By Samentha Jones</Text>
				</View>
				<View style={styles.imgContain}>
					<Image
						source={require("../../../assets/longpoint.png")}
						style={styles.imgshow}
					/>
					<Text style={styles.ratingTxt}>4.3</Text>
				</View>
				<Text style={styles.subtitle}>“Very good professional”</Text>
				<View style={styles.creditdiv}>
					<FontAwesome5 name='money-bill-wave' size={24} color={secColor} />
					<Text style={styles.credits}>+10 Credits</Text>
				</View>

				<CustomAuthBtn
					title={"Send Thank you note"}
					onClick={() => navigation.navigate("ThankNoteScreen")}
				/>
				<View style={styles.thankdiv}>
					<Image
						source={require("../../../assets/thank1.png")}
						style={styles.thankimg}
					/>
					<Text style={styles.thanktxt}>Thank you Note sent</Text>
				</View>
				<View style={styles.infodiv}>
					<Text style={styles.infotxt}>Position: Waiter</Text>
					<Text style={styles.infotxt}>Department: Tropical Restaurant</Text>
					<Text style={styles.infotxt}>Business: Tropical Hotel</Text>
					<Text style={styles.infotxt}>Date: Today, 12:30 pm</Text>
				</View>
				<Text style={styles.questionHeading}>Skills</Text>
				{skillsQuestion.map((dat, index) => (
					<RatingEmpojiComponent
						key={index}
						question={dat.question}
						selectedtext={dat.selectedValue}
					/>
				))}
				<Text style={styles.questionHeading}>Appearance</Text>

				{ApperanceQuestion.map((dat, index) => (
					<RatingEmpojiComponent
						key={index}
						question={dat.question}
						selectedtext={dat.selectedValue}
					/>
				))}
				<Text style={styles.questionHeading}>
					Safety evaluation for COVID-19
				</Text>

				{vaccinequestion.map((dat, index) => (
					<TrueFalseQuestion
						question={dat.question}
						value={dat.selectedValue}
						key={index}
					/>
				))}
			</ScrollView>
		</SafeAreaComp>
	);
};

export default EvolutionDetails;

const styles = StyleSheet.create({
	rowcont: {
		width: w("100%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	avtar: {
		width: h("5%"),
		height: h("5%"),
		borderRadius: h("5%"),
	},
	nametxt: {
		fontSize: h("2.5%"),
		marginLeft: 10,
		fontWeight: "bold",
	},
	questionHeading: {
		fontSize: h("4%"),
		width: "90%",
		alignSelf: "center",
		marginVertical: h("3%"),
	},
	imgContain: {
		width: w("100%"),
		height: h("30%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	subtitle: {
		textAlign: "center",
		marginBottom: h("3%"),
		alignSelf: "center",
		fontSize: h("3"),
		color: "#202442",
	},
	imgshow: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	ratingTxt: {
		position: "absolute",
		top: h("6%"),
		fontSize: h("10%"),
		color: screenBg,
		textAlign: "center",
		left: w("38%"),
	},
	creditdiv: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		alignSelf: "center",
		marginBottom: h("2%"),
	},

	credits: {
		fontWeight: "bold",
		fontSize: h("2.2%"),
		marginLeft: 10,
	},
	infodiv: {
		width: "100%",
		height: h("18%"),
		backgroundColor: "#F0F0F4",
		paddingVertical: h("2%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
		marginTop: h("3%"),
	},
	infotxt: {
		width: "95%",
		fontSize: h("2.3%"),
	},
	thankdiv: {
		width: "100%",
		height: h("15%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	thankimg: {
		width: "40%",
		height: "90%",
		resizeMode: "contain",
	},
	thanktxt: {
		fontSize: h("2.5%"),
		width: "40%",
		textAlign: "center",
	},
});
