import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const hobiji = [
    {
    id: 1, 
    name: "coding"
    },
    {
    id: 2, 
    name: "travelling"
    },
    {
    id: 3, 
    name: "reading"
    }
]

export const ProfileScreen = () => {
    return (
        <View>
            <Text>Ime: Sadzida</Text>
            <Text>prezime: Hubijar</Text>
            <Text>Godine: 14</Text>
            <Text>Spol: Zensko</Text>
            <Text>Lokacija: Sarajevo, Bosna i Hercegovina</Text>

            <Text>Hobiji:</Text>
            <FlatList>
            data = {hobiji}
            keyExtractor = {(hobij) => hobij.id}
                return(
                    <Text>{options.index+1}</Text>
                )

            </FlatList>

        </View>
    )
}

