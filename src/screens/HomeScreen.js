import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchApi, results, isError] = useResults();
  const searchHandler = () => {
    searchApi(searchText);
  };
  return (
    <View style={styles.big}>
      <View style={styles.box}>
        <Ionicons name="search" size={30} style={styles.text} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onEndEditing={searchHandler}
        />
        <Button title="Enter" onPress={searchHandler} />
      </View>
      {isError ? <Text> {isError}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList results={results} title={searchText} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 30,
    alignContent: "center",
    marginHorizontal: 300,
  },
  text: {
    marginHorizontal: 5,
  },
  inputStyle: {
    fontSize: "35",
    borderColor: "blue",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: 1400,
  },
  box: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 12,
    flexDirection: "row",
    borderColor: "blue",
    borderWidth: 1,
  },
  btn: {
    height: 5,
    width: 300,
    borderRadius: 12,
    paddingRight: 300,
    borderWidth: 1,
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "green",
  },
  big: {
    marginLeft: 10,
    flex: 1,
  },
});

export default HomeScreen;