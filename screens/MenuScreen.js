import React from "react";
import {Text, View, Button} from "react-native";


export default function MenuScreen(props){
    console.log(props)
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button
                title="Go to Profile Screen"
                color="red"
                onPress={() => props.navigation.navigate("ProfileScreen") }
            >

            </Button>
        </View>
    )
}