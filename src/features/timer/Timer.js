import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.toggle}>
        <RoundedButton
          title={isStarted ? "Pause" : "Start"}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderColor: isStarted ? colors.red : colors.green,
          }}
          textStyle={{
            fontSize: spacing.lg,
            color: isStarted ? colors.red : colors.green,
          }}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  toggle: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});
