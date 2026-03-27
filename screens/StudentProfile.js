import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StudentInfo from "../src/components/StudentInfo";
import ProjectInfo from "../src/components/ProjectInfo";

export default function StudentProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Profile</Text>

      <StudentInfo
        name="Sadzida Hubijar"
        title="React native developer"
        description="i am student at ICT college in Kakanj"
        image={require("../src/img/avatar-2.avif")}
      />

      <Text style={styles.projectHeader}>Projects</Text>

      <ProjectInfo
        title="Mobile app development"
        description="Build a react native application with modern UI design patterns"
        image={require("../src/img/avatar-3.jpg")}
      />

      <ProjectInfo
        title="Web project"
        description="Created a responsive web aplication using react and firebase backend"
        image={require("../src/img/avatar-4.jpg")}
      />

      <ProjectInfo
        title="E-comerce platform"
        description="Developed full stack e-commerce solution with navment integration"
        image={require("../src/img/avatar-5.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  projectHeader: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});