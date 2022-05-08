import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

// main navigation screen Imported
import MyStackNavig from "./src/AppNavigation/MyStackNavig";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView />
      <MyStackNavig />
    </>
  );
}
