import { StyleSheet, Text, View, StatusBar } from "react-native";
import AuthSelection from "./src/Views/AuthSelection";
import LoginScreen from "./src/Views/LoginScreen";
import SplashScreen from "./src/Views/SplashScreen";
import SplashScreenSec from "./src/Views/SplashScreenSec";
import RegisterScreen from "./src/Views/RegisterScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      <RegisterScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
