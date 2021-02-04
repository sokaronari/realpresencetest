import React from "react";
import { Text, View, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function RemindersScreen() {
  return (
    <ImageBackground
      style={{
        width: "100%",
        alignItems: "center",
        paddingTop: 250,
        flex: 1
      }}
      source={require("../assets/reminders.png")}
    >
      <Text style={{ fontSize: 20, color: "grey" }}>*EMPTY</Text>
      <View style={{ width: "90%" }}>
        <AppButton
          buttonText="add a new reminder"
          color="white"
          textColor={colors.welcomePrimary}
        />
      </View>
    </ImageBackground>
  );
}

export default RemindersScreen;
