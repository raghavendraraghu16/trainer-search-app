import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Raghu</Text>
        <Text style={styles.profession}>Engineering Student</Text>
        <Text style={styles.email}>raghu@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f9ff",
    padding: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1a1a1a",
  },
  profession: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#777",
  },
});
