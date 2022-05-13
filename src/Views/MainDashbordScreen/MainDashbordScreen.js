import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ImageBackground,
	Image,
	Modal,
	TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import SafeAreaComp from "../../Components/CommonComponents/SafeAreaComp";
import { w, h } from "react-native-responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { screenBg, secColor, mainColor } from "../../AppColors";
import CustomAuthBtn from "../../Components/AuthComponents/CustomAuthBtn";
import Carousel from "react-native-snap-carousel";
import { FontAwesome5 } from "@expo/vector-icons";

const MainDashbordScreen = ({ navigation }) => {
	const c = useRef(null);
	const roles = [
		{ title: "Waiter - tress" },
		{ title: "Night auditor" },
		{ title: "Barista" },
		{ title: "Valet" },
		{ title: "Hotel Receptionist" },
	];
	const reviewarr = [
		{
			reviewpoints: "4.5",
			review: "“Very good professional”",
			name: "Kathrine Jones",
			userimglink:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			reviewpoints: "4.2",
			review: "",
			name: "John Smith",
			userimglink:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
		{
			reviewpoints: "4.5",
			review: "“Very good professional”",
			name: "Kathrine Jones",
			userimglink:
				"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		},
	];
	const [activeCard, setactiveCard] = useState(0);
	const [showModel, setshowModel] = useState(false);
	const toggleModal = () => {
		setshowModel(!showModel);
	};
	return (
		<SafeAreaComp>
			<View style={styles.maindiv}>
				<ScrollView>
					<View style={styles.headerdiv}>
						<ImageBackground
							style={styles.imgbg}
							source={require("../../../assets/TopProfile.png")}>
							<View style={styles.topNavBar}>
								<View style={styles.btndiv} />
								<Text style={styles.comphead}>S-Rate</Text>
								<TouchableOpacity
									onPress={() => navigation.navigate("EmailInboxScreen")}
									style={styles.btndiv}>
									<Ionicons name='mail' size={h("4%")} color={screenBg} />
								</TouchableOpacity>
							</View>
							<View style={styles.avtarContainer}>
								<View
									style={{
										...styles.avtardiv,
										borderWidth: 2,
										borderColor: secColor,
									}}
									avtardiv>
									<Image
										style={styles.avtardiv}
										source={{
											uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
										}}
									/>
								</View>
							</View>
						</ImageBackground>
					</View>
					<View style={styles.othercontent}>
						<Text style={styles.nameheading}>Hello, DJ Jones</Text>
						<CustomAuthBtn title={"Waiter - trees"} onClick={toggleModal} />
						<View style={styles.dasbordimgcont}>
							<Image
								source={require("../../../assets/dashbordimg.png")}
								style={styles.dashbordimgshow}
							/>
							<Text style={styles.scoretext}>4.3</Text>
						</View>
						<Text style={styles.qrcodehading}>My QR Code</Text>
						<View style={styles.dasbordimgcont}>
							<Image
								source={require("../../../assets/qrcode.png")}
								style={styles.dashbordimgshow}
							/>
						</View>
						<Text style={styles.comphead2}>Evaluations from customers:</Text>
						<View
							style={{
								width: w("100%"),
								height: h("30%"),
								backgroundColor: "#f4f4f4",
								marginTop: h("4%"),
							}}>
							<Carousel
								data={reviewarr}
								itemWidth={w("100%")}
								sliderWidth={w("100%")}
								renderItem={({ item, index }) => {
									const { reviewpoints, review, name, userimglink } = item;
									return (
										<View style={styles.maincarddiv}>
											<View style={styles.rowcontain}>
												<FontAwesome5 name='laugh' size={24} color='#2EA86F' />
												<Text style={styles.getPoint}>{reviewpoints}</Text>
												<Text style={styles.totalpoint}>/5</Text>
											</View>
											{review.length > 0 ? (
												<Text style={styles.reviewtxt}>{review}</Text>
											) : null}
											<View style={{ ...styles.rowcontain }}>
												<Image
													source={{
														uri: userimglink,
													}}
													style={styles.useravtar}
												/>
												<Text style={styles.username}>{name}</Text>
											</View>
										</View>
									);
								}}
								onSnapToItem={(index) => setactiveCard(index)}
							/>
						</View>
						<View style={styles.dotcont}>
							{reviewarr.map((dat, index) => (
								<View
									key={index}
									style={{
										width: index === activeCard ? 10 : 7,
										height: index === activeCard ? 10 : 7,
										borderRadius: 10,
										marginHorizontal: 2,
										backgroundColor:
											index === activeCard ? mainColor : "lightgrey",
									}}
								/>
							))}
						</View>
						<CustomAuthBtn
							title={"View all evaluations "}
							onClick={() => navigation.navigate("CustomerEvolution")}
						/>
					</View>
				</ScrollView>
			</View>
			<Modal
				animationType='fade'
				transparent={true}
				visible={showModel}
				onRequestClose={toggleModal}>
				<View
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}>
					<View style={styles.modeldiv}>
						<View
							style={{
								width: "100%",
								height: h("7%"),
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								flexDirection: "column",
							}}>
							<Text style={{ fontSize: h("2%"), marginBottom: h("0.5%") }}>
								Please select your job position :
							</Text>
							<TouchableOpacity
								onPress={toggleModal}
								style={{
									width: h("5%"),
									height: h("5%"),
									position: "absolute",
									top: 0,
									right: 0,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<EvilIcons name='close' size={h("4%")} color='black' />
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: "100%",
								height: h("45%"),
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								flexDirection: "column",
								marginVertical: h("3%"),
							}}>
							{roles.map((dat, index) => (
								<View
									style={{
										width: "100%",
										height: h("6%"),
										marginBottom: h("1%"),
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									key={index}>
									<Text style={{ fontSize: h("3%"), textAlign: "center" }}>
										{dat.title}
									</Text>
								</View>
							))}
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaComp>
	);
};

export default MainDashbordScreen;

const styles = StyleSheet.create({
	maindiv: {
		width: w("100%"),
		height: "100%",
		paddingBottom: h("5%"),
	},
	headerdiv: {
		width: w("100%"),
		height: h("35%"),
	},
	imgbg: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	topNavBar: {
		width: "100%",
		height: h("8%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		// paddingHorizontal: w("1%"),
	},
	avtarContainer: {
		width: w("100%"),
		height: h("27%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	avtardiv: {
		width: h("22%"),
		height: h("22%"),
		borderRadius: h("22%"),
		overflow: "hidden",
	},
	comphead: {
		fontSize: h("6%"),
		fontWeight: "bold",
		color: secColor,
	},

	comphead2: {
		fontSize: h("4%"),
		fontWeight: "bold",
		color: "black",
		textAlign: "center",
		width: "90%",
		alignSelf: "center",
	},
	btndiv: {
		width: w("15%"),
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	othercontent: {
		width: w("100%"),
		height: h("150%"),
	},
	nameheading: {
		fontSize: h("3%"),
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: h("2%"),
	},
	qrcodehading: {
		fontSize: h("3%"),
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: h("2%"),
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
	totalpoint: {
		fontSize: h("2%"),
		fontWeight: "500",
	},
	getPoint: {
		fontSize: h("5%"),
		fontWeight: "bold",
		marginRight: w("5%"),
		marginLeft: w("4%"),
	},
	rowcontain: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginBottom: h("2.5%"),
	},
	reviewtxt: {
		fontSize: h("3%"),
		alignSelf: "center",
		marginBottom: h("2.5%"),
	},
	useravtar: {
		width: h("5%"),
		height: h("5%"),
		borderRadius: h("5%"),
		marginRight: h("2%"),
	},
	username: {
		fontSize: h("2%"),
		fontWeight: "bold",
	},
	maincarddiv: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	dotcont: {
		width: w("25%"),
		height: h("5%"),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
		alignSelf: "center",
	},
	modeldiv: {
		width: "100%",
		height: h("60%"),
		backgroundColor: screenBg,
	},
});
