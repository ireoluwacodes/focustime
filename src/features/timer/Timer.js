import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const changeTime = (time) => {
    setMinutes(time);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          minutes={minutes}
          onProgress={onProgress}
        />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          color={isStarted ? colors.purple : colors.aqua}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.toggle}>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.toggle}>
        <RoundedButton
          title={isStarted ? "Pause" : "Start"}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderColor: isStarted ? colors.purple : colors.aqua,
          }}
          textStyle={{
            fontSize: spacing.lg,
            color: isStarted ? colors.purple : colors.aqua,
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
  progressBar: {
    margin: spacing.md,
  },
  countdown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  toggle: {
    flex: 0.3,
    padding: spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
