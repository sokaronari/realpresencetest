import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function FebruaryScreen({ onPress }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          alignItems: "center",
          height: "25%"
        }}
        source={require("../../assets/history-detail.png")}
      />
      <View style={styles.Listcontainer}>
        <Text style={{ color: "white" }}>january</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14253E",
    width: "100%",
    height: "100%",
    paddingTop: 20
  },
  Listcontainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FebruaryScreen;
