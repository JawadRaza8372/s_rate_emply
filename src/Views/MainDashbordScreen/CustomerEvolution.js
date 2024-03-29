import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import Header from "../../Components/CommonComponents/Header";
import { w, h } from "react-native-responsiveness";
import { mainColor } from "../../AppColors";
import FilterBox from "../../Components/MainDashbordComp/FilterBox";
import CustomerEvolutionCard from "../../Components/MainDashbordComp/CustomerEvolutionCard";
import FilterTag from "../../Components/MainDashbordComp/FilterTag";

const CustomerEvolution = ({ navigation }) => {
	const data = [
		{
			name: "Kathrine Jones",
			userimg:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
			credits: "+10",
			review: "“Very good professional”",
			time: "Today, 12:30 pm",
			subtitle: "Waiter, Tropical Restaurant",
			rating: "4.5",
			thankNote: "",
		},
		{
			name: "Samentha Jones",
			userimg:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
			credits: "",
			review: "“Very good professional”",
			time: "Today, 12:30 pm",
			subtitle: "Waiter, Tropical Restaurant",
			rating: "4.3",
			thankNote: "2",
		},
		{
			name: "Albert Jones",
			userimg:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
			credits: "+10",
			review: "",
			time: "Today, 12:30 pm",
			subtitle: "Waiter, Tropical Restaurant",
			rating: "4.2",
			thankNote: "1",
		},
		{
			name: "Smith Jones",
			userimg:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
			credits: "+10",
			review: "",
			time: "Today, 12:30 pm",
			subtitle: "Waiter, Tropical Restaurant",
			rating: "4.2",
			thankNote: "3",
		},
	];
	return (
		<SafeAreaComp>
			<View style={styles.headerContent}>
				<Header onPress={() => navigation.goBack()} />
				<Text style={styles.maineading}>Evaluations from customers</Text>
			</View>
			<FilterBox />
			<View style={styles.tagwrap}>
				<FilterTag />
				<FilterTag />
			</View>
			<ScrollView>
				{data.map((dat, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => navigation.navigate("EvolutionDetailScreen")}>
						<CustomerEvolutionCard
							name={dat.name}
							avtar={dat.userimg}
							rating={dat.rating}
							review={dat.review}
							credits={dat.credits}
							subtitle={dat.subtitle}
							time={dat.time}
							thankNote={dat.thankNote}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		</SafeAreaComp>
	);
};

export default CustomerEvolution;

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
	tagwrap: {
		width: w("95%"),
		alignSelf: "center",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: h("2%"),
	},
});
