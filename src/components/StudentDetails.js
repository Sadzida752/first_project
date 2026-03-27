import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function StudentDetails(props) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={props.image}/>
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    name: {
        fontSize: 18
    },
    description: {
        fontSize: 14,
    }
})