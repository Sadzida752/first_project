import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function StudentInfo(props) {
  return (
    <View style={styles.card}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   card: {
    backgroundColor: "#f2eded",
    alignItems: "center",
    marginBottom: 20,
   },
  image: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 23,
    color: "black",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
});