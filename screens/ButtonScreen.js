import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function ButtonScreen() {
    return (
        <View style = {styles.container}>
            <Text>Button Screen</Text>
            <View style = {styles.container_2}>
                <Button
                    title = "Click me"
                    color = "red"
                    onPress={() => { console.log("Clicked") }}
                >
                </Button>
            </View>

            <TouchableOpacity style = {styles.customButton} onPress={() => { alert("Clicked") }}>
                <Text style = {styles.customButtonText}>Click me 2</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: "green",
        borderWidth: 2
    },
    container_2: {
        width: "20%",
        borderColor: "blue",
        borderWidth: 2
    },
    customButton:  {
        width: "10%",
        backgroundColor: "black",
        padding: 10,
        marginTop: 10
    },
    customButtonText: {
        color: "white",
        textAlign: "center"
    }
})