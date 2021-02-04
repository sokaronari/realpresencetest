import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({
  buttonText,
  onPress,
  color,
  marginTop,
  textColor,
  marginBottom
}) {
  return (
    <TouchableOpacity
      style={[
        styles.LoginButton,
        color && { backgroundColor: color },
        { marginTop: marginTop },
        { marginBottom: marginBottom }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.textfont, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 25,
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
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase"
  }
});

export default AppButton;
