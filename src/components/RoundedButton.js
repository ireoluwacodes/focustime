import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      borderColor: "#fff",
      borderWidth: 2,
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });