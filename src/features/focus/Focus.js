import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useState } from "react";
import { spacing } from "../../utils/spacing";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onSubmitEditing={({ nativeEvent: { text } }) => {
              setTmpItem(text);
            }}
          />
          <RoundedButton
            style={styles.roundedButton}
            size={50}
            title="+"
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.5,
    padding: spacing.lg,
    justifyContent: "center",
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: spacing.xxl,
  },

  inputContainer: {
    marginTop: spacing.lg,
    flexDirection: "row",
    gap: spacing.lg,
    alignItems: "center",
  },

  roundedButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    height: spacing.xxxl,
    borderRadius: 5,
    padding: spacing.sm,
  },
});
