import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
import ThankCard from "../../Components/MainDashbordComp/ThankCard";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
const ThnakNoteScreen = () => {
	const [isActiveCard, setisActiveCard] = useState(-1);
	const thanksdata = [
		{
			imglink: require("../../../assets/thank1.png"),
			text: "I appreciate your evaluation!",
		},
		{
			imglink: require("../../../assets/thank2.png"),
			text: "For your amazing evaluation!",
		},
		{
			imglink: require("../../../assets/thank3.png"),
			text: "You are the best!",
		},
	];
	return (
		<SafeAreaComp>
			<View style={styles.headerContent}>
				<Header onPress={() => navigation.goBack()} />
				<Text style={styles.maineading}>Send thank you note</Text>
			</View>
			<View style={styles.rowcont}>
				<Image
					source={{
						uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					}}
					style={styles.avtar}
				/>
				<Text style={styles.nametxt}>To Samentha Jones</Text>
			</View>
			<Text style={styles.notdesc}>
				Select a thank you note to send to the customer
			</Text>
			<ScrollView>
				{thanksdata.map((dat, index) => (
					<ThankCard
						key={index}
						imglink={dat.imglink}
						text={dat.text}
						onClick={() => setisActiveCard(index)}
						isActive={isActiveCard === index ? true : false}
					/>
				))}
			</ScrollView>
			<CustomAuthBtn title={"Send"} onClick={() => console.log("done")} />
			<View style={{ marginTop: h("2%") }} />
		</SafeAreaComp>
	);
};

export default ThnakNoteScreen;

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
	notdesc: {
		textAlign: "center",
		width: "70%",
		alignSelf: "center",
		marginVertical: h("3%"),
	},
});
