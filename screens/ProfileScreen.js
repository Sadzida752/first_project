import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

const myInfo = {
  name: "Kerim Begić",
  age: 23,
  gender: "male",
  hobbies: ["Coding", "Travelling", "Reading"],
  city: "Kakanj",
  country: "Bosnia and Herzegovina",
  about: "I am a student at ICT College in Kakanj. I am learning React Native.",
};

export default function ProfileScreen(props) {
  const showGender = myInfo.gender === "male" ? "Muško" : "Žensko";

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{myInfo.name}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Godine: {myInfo.age}</Text>
        <Text style={styles.infoText}>Spol: {showGender}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lokacija</Text>
        <Text style={styles.sectionText}>{myInfo.city}</Text>
        <Text style={styles.sectionText}>{myInfo.country}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobiji</Text>
        <FlatList
          data={myInfo.hobbies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.hobbyBox}>
              <Text style={styles.hobbyText}>{item}</Text>
            </View>
          )}
          horizontal={true}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O meni</Text>
        <Text style={styles.sectionText}>{myInfo.about}</Text>
      </View>

      <Button
        title="Go to Menu Screen"
        color="red"
        onPress={() => props.navigation.goBack("MenuScreen") }
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  
  name: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },

  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#444",
  },

  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
  },

  hobbyBox: {
    backgroundColor: "#4a90d9",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginRight: 10,
  },
  hobbyText: {
    color: "#fff",
    fontSize: 14,
  },
});