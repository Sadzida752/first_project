import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const students = [
    {
        id: 1,
        name: "Ivan",
        surename: "Ivanović",
        age: 20
    },
    {
        id: 2,
        name: "Janko",
        surename: "Janković",
        age: 22
    },
    {
        id: 3,
        name: "Mirza",
        surename: "Sivac",
        age: 18
    }
]

// 1. Ivan Ivanović - 20 godina
// 2. Janko Janković - 22 godina
// 3. Mirza Sivac - 18 godina



export const ListScreen = () => {
    return(
        <View>
            <Text>Lista Studenata</Text>
            <FlatList
            data = {students}
            keyExtractor={(student) => student.id}
            renderItem = { (options) => {
                return(
                    <Text>{options.index+1}. {options.item.name} {options.item.surename} - {options.item.age} godina</Text>
                )
            }
            }
            >
            </FlatList>
        </View>
    )
}
