import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? <Text>{focusSubject}</Text> : <Focus />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252250",
    alignItems: "center",
    justifyContent: "center",
  },
});
