import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import Header from "../../Components/CommonComponents/Header";
import { mainColor, screenBg } from "../../AppColors";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import EvolutionScroller from "../../Components/MainDashbordComp/EvolutionScroller";

const EvolutionScore = ({ navigation }) => {
	const [showModel, setshowModel] = useState(false);
	const toggleModal = () => {
		setshowModel(!showModel);
	};
	const skillsdata = [
		{ value: 4.2, totalvalue: 5, title: "Efficient" },
		{ value: 3.2, totalvalue: 5, title: "Quick" },
		{ value: 2.2, totalvalue: 5, title: "Pro-active" },
	];
	const apperacedata = [
		{ value: 4.5, totalvalue: 5, title: "Uniform’s condition" },
		{ value: 1.2, totalvalue: 5, title: "Hygiene" },
		{ value: 1.2, totalvalue: 5, title: "Visibility of the name badge" },
	];
	const attitudedata = [
		{ value: 4.2, totalvalue: 5, title: "Helpful" },
		{ value: 1.2, totalvalue: 5, title: "Polite" },
		{ value: 3.2, totalvalue: 5, title: "Friendly" },
	];
	return (
		<SafeAreaComp>
			<View style={styles.headerContent}>
				<Header onPress={() => navigation.goBack()} />
				<Text style={styles.maineading}>Evaluation score</Text>
			</View>
			<CustomAuthBtn title={"Waiter - trees"} onClick={toggleModal} />
			<ScrollView contentContainerStyle={{ marginTop: h("2%") }}>
				<View style={styles.dasbordimgcont}>
					<Image
						source={require("../../../assets/dashbordimg.png")}
						style={styles.dashbordimgshow}
					/>
					<Text style={styles.scoretext}>4.3</Text>
				</View>
				<Text style={styles.questionHeading}>Skills</Text>
				{skillsdata.map((dat, index) => (
					<EvolutionScroller
						partialValue={dat.value}
						totalValue={dat.totalvalue}
						title={dat.title}
						key={index}
					/>
				))}
				<Text style={styles.questionHeading}>Appearance</Text>
				{apperacedata.map((dat, index) => (
					<EvolutionScroller
						partialValue={dat.value}
						totalValue={dat.totalvalue}
						title={dat.title}
						key={index}
					/>
				))}
				<Text style={styles.questionHeading}>Attitude</Text>
				{attitudedata.map((dat, index) => (
					<EvolutionScroller
						partialValue={dat.value}
						totalValue={dat.totalvalue}
						title={dat.title}
						key={index}
					/>
				))}
			</ScrollView>
		</SafeAreaComp>
	);
};

export default EvolutionScore;

const styles = StyleSheet.create({
	headerContent: {
		width: "100%",
		height: h("17%"),
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
		width: "90%",
	},
	dasbordimgcont: {
		height: h("30%"),
		width: h("30%"),
		position: "relative",
		alignSelf: "center",
		marginVertical: h("3%"),
	},
	dashbordimgshow: {
		width: h("30%"),
		height: h("30%"),
		resizeMode: "contain",
		alignSelf: "center",
	},
	scoretext: {
		position: "absolute",
		top: h("10%"),
		fontSize: h("7%"),
		fontWeight: "bold",
		color: screenBg,
		alignSelf: "center",
	},
	questionHeading: {
		fontSize: h("4%"),
		width: "95%",
		fontWeight: "bold",
		alignSelf: "center",
		marginVertical: h("3%"),
	},
});
