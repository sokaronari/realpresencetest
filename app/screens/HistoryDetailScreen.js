import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import AuthContext from "../auth/context";
import colors from "../config/colors";
import getHistoryApi from "../api/getHistory";

const months = {};

function HistoryDetailScreen() {
  const [history, setHistory] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState(false);
  const [unChangedData, setUnChangedData] = useState(400);
  const { userData } = useContext(AuthContext);
  const AuthStr = "Bearer ".concat(userData.data.access_token);
  const getHistoryFunc = async () => {
    const result = await getHistoryApi.getHistory(AuthStr);
    if (!result.ok) return setError(true);

    if (result.status == 200) {
      setError(false);
      console.log(result.data.data.December[0]);
      setUnChangedData(result.data.code);
      setHistory(result.data.data);
    }
  };
  useEffect(() => {
    setIsMounted(true);
    if (isMounted == true) getHistoryFunc();
    return () => {
      setIsMounted(false);
    };
  }, [unChangedData]);
  if (unChangedData == 400) getHistoryFunc();

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: colors.welcomeSecondary
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "100",
          color: "black",
          bottom: 65
        }}
      >
        {history.December[0].jam_masuk}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "100",
          color: "black",
          bottom: 65
        }}
      >
        {history.December[0].jam_pulang}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    width: 350,
    height: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { color: colors.white, fontSize: 20, fontWeight: "100" }
});
export default HistoryDetailScreen;
