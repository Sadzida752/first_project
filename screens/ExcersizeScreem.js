import React from "react";
import { Text, View, StyleSheet } from "react-native";

let naslov = "Ovo je naslov";

// arrow function
export const ExerciseScreen = () => {
    naslov = 1000;
    return(
        <View>
            <Text style= {styles.mainHeader}>Ovo je glavni naslov</Text>
            <Text style= {styles.description}>Ovo je sporedni naslov</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    mainHeader: {
        color: "red",
        fontSize: 20
    },
    description: {
        color: "green",
        fontSize: 10
    }
});