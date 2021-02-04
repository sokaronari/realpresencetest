import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";

function OpeningScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/applogo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.welcomePrimary
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center"
  }
});
export default OpeningScreen;
