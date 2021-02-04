import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import months from "../config/months";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { useNavigation } from "@react-navigation/core";
import AuthContext from "../auth/context";
import colors from "../config/colors";
import getHistoryApi from "../api/getHistory";

function HistoryScreen({ onPress }) {
  const authContext = useContext(AuthContext);
  const [historyData, setHistoryData] = useState();
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
      console.log(result.data.data);
      setUnChangedData(result.data.code);
      historyData = result.data.data;
      authContext.setHistoryData(historyData);
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

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          alignItems: "center",
          height: "20%",
          marginBottom: 10
        }}
        source={require("../assets/history.png")}
      />

      <FlatList
        data={months}
        keyExtractor={month => month.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            alignItems={"center"}
            title={item.title}
            fontSize={25}
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14253E",
    width: "100%",
    justifyContent: "center"
  },
  listContainer: {
    justifyContent: "center"
  }
});

export default HistoryScreen;
