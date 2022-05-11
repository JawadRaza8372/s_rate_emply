import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  LogBox,
} from "react-native";

// main navigation screen Imported
import MyStackNavig from "./src/AppNavigation/MyStackNavig";

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with",
    "ViewPropTypes will be removed from React Native."
  ]);
  return (
    <>
      <StatusBar />
      <MyStackNavig />
    </>
  );
}
