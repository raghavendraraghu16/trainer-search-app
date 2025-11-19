import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      {/* NEW Avatar */}
      <Image
        style={styles.avatar}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
        }}
      />

      <Text style={styles.name}>Raghu</Text>
      <Text style={styles.email}>raghu@example.com</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.logout]}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  logout: {
    backgroundColor: "red",
  },
});
