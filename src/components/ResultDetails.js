import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={result.image} />
      <Text style={styles.text}>{result.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ResultDetails;