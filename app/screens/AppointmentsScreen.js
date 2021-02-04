import React from "react";
import { Text, View, ImageBackground } from "react-native";

function AppointmentsScreen() {
  return (
    <ImageBackground
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
      }}
      source={require("../assets/appointment-01.png")}
    >
      <View style={{ marginTop: 80, alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "grey" }}>*NO APPOINTMENT</Text>
      </View>
    </ImageBackground>
  );
}

export default AppointmentsScreen;
