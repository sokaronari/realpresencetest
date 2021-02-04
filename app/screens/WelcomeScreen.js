import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/core";
import RegisterButton from "../components/RegisterButton";
import LoginButton from "../components/LoginButton";
function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require("../assets/welcome_screen-top_shadow.png")}
        style={styles.imageTop}
      />
      <View style={styles.imageBottom}>
        <Image source={require("../assets/applogo.png")} style={styles.logo} />
        <LoginButton onPress={() => navigation.navigate("Login")} />
        <RegisterButton onPress={() => navigation.navigate("Sign Up")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageTop: {
    width: "100%",
    height: "45%"
  },
  imageBottom: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: colors.welcomePrimary
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  text: {
    color: colors.login,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  }
});

export default WelcomeScreen;
