import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProjectInfo(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1eded",
    marginBottom: 10,
    alignItems: "row",
  },
  image: {
    width: 100,
    height: 100
  },
  
    title: {
    fontWeight: "bold"
  },
 
  description: {
    fontSize: 20,
    color: "#000000",
  },
});