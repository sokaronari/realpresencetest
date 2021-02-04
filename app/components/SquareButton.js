import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function SquareButton({
  onPress,
  marginTop,
  backgroundColor,
  textColor,
  buttonText
}) {
  return (
    <TouchableOpacity
      style={[
        styles.SquareButton,
        { marginTop: marginTop, backgroundColor: backgroundColor }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.textfont, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  SquareButton: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 145,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  textfont: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase"
  }
});

export default SquareButton;
