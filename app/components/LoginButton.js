import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function LoginButton({ onPress, marginTop }) {
  return (
    <TouchableOpacity
      style={[styles.LoginButton, { marginTop: marginTop }]}
      onPress={onPress}
    >
      <Text style={styles.textfont}>LOGIN</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 25
  },
  textfont: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    color: colors.welcomePrimary
  }
});

export default LoginButton;
