import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const Focus = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <RoundedButton style={styles.roundedButton} size={50} title="+"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight : "bold",
    fontSize : 40,
  },
  inputContainer:{
    marginTop : 20,
    flexDirection : "row",
    gap : 20,
    alignItems : "center",
  },
  roundedButton : {
    alignItems : "center",
    justifyContent  : "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    padding: 12,
  },
});
