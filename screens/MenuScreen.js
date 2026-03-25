import React from "react";
import {Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";


export default function MenuScreen(props){
    console.log(props)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => props.navigation.navigate("ProfileScreen")}
        >
          <Text style={styles.profileButtonText}>Go to Profile Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => props.navigation.navigate("StudentsScreen")}
        >
          <Text style={styles.profileButtonText}>Go to Students Screen</Text>
        </TouchableOpacity>

      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    profileButton: {
        width: "50%",
        backgroundColor: "#333",
        alignItems: "center",
        marginVertical: 10,
    },

    profileButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
})