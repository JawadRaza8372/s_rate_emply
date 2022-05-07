import { StyleSheet, Text, View, StatusBar } from "react-native";
import AuthSelection from "./src/Views/AuthSelection";
import LoginScreen from "./src/Views/LoginScreen";
import SplashScreen from "./src/Views/SplashScreen";
import SplashScreenSec from "./src/Views/SplashScreenSec";
import RegisterScreen from "./src/Views/RegisterScreen";
import OtpScreen from "./src/Views/OtpScreen";
import FailedScreen from "./src/Views/FailedScreen";
import SuccessScreen from "./src/Views/SuccessScreen";
import RegistrationSuccess from "./src/Views/RegistrationSuccess";
import ForgotPasswordScreen from "./src/Views/ForgotPasswordScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      {/* <ForgotPasswordScreen /> */}
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
