import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../src/components/StudentDetails";

export default function StudentsScreen() {
    return (
        <View>
            <Text style={styles.header}>Students Screen</Text>
            <StudentDetails name="Kerim Begic"
             description="I am a student at ICT College in Kakanj. I am learning React Native."
             image= {require("../src/img/avatar-2.avif")} />

            <StudentDetails name="Ahmet Demir"
             description="I am a student at ICT College in Kakanj. I am learning React Native."
             image= {require("../src/img/avatar-2.avif")} />

            <StudentDetails name="Sara Kovacevic"
             description="I am a student at ICT College in Kakanj. I am learning React Native."
             image= {require("../src/img/avatar-2.avif")} />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        color: "#333",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",       
    }
}) 