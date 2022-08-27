import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const ResultsList = (props) => {
  const { title, results } = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {results.map((result, index) => (
        <ResultCard key={index} result={result} />
      ))}
    </View>
  );
};

const ResultCard = ({ result, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Results", { uri: result.recipe.shareAs })
      }
    >
      <ResultDetails result={result.recipe} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  box: {
    marginLeft: 10,
  },
});
export default withNavigation(ResultsList);