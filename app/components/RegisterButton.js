import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function RegisterButton({ onPress, color }) {
  return (
    <TouchableOpacity style={styles.LoginButton} onPress={onPress}>
      <Text style={styles.textfont}>sign up</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  LoginButton: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 25,
    marginTop: 15,
    borderColor: "#082D5F"
  },
  textfont: {
    fontSize: 20,
    fontWeight: "700",
    color: "#082D5F",
    textTransform: "uppercase"
  }
});

export default RegisterButton;
