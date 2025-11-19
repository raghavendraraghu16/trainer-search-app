import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"; // ⭐ ICON IMPORT

export default function Project() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Projects</Text>

      {/* Project 1 */}
      <View style={styles.card}>
        <Ionicons
          name="star-outline"
          size={28}
          color="gold"
          style={styles.icon}
        />
        <Text style={styles.projectTitle}>Mobile Attendance App</Text>
        <Text style={styles.projectDesc}>
          A mobile app to track student attendance using QR scan. Built with
          React Native and Firebase.
        </Text>
        <Text style={styles.tech}>Tech: React Native, Firebase</Text>
      </View>

      {/* Project 2 */}
      <View style={styles.card}>
        <Ionicons
          name="star-outline"
          size={28}
          color="gold"
          style={styles.icon}
        />
        <Text style={styles.projectTitle}>Portfolio Website</Text>
        <Text style={styles.projectDesc}>
          A personal portfolio website showcasing skills, contact info, and
          work.
        </Text>
        <Text style={styles.tech}>Tech: HTML, CSS, JavaScript</Text>
      </View>

      {/* Project 3 */}
      <View style={styles.card}>
        <Ionicons
          name="star-outline"
          size={28}
          color="gold"
          style={styles.icon}
        />
        <Text style={styles.projectTitle}>Chatbot using Python</Text>
        <Text style={styles.projectDesc}>
          A simple AI chatbot built using Python and NLP libraries.
        </Text>
        <Text style={styles.tech}>Tech: Python, NLTK</Text>
      </View>

      {/* Project 4 */}
      <View style={styles.card}>
        <Ionicons
          name="star-outline"
          size={28}
          color="gold"
          style={styles.icon}
        />
        <Text style={styles.projectTitle}>Music Player UI</Text>
        <Text style={styles.projectDesc}>
          A stylish music player UI design for mobile apps.
        </Text>
        <Text style={styles.tech}>Tech: Figma, React Native</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7faff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1a1a1a",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  projectDesc: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
  },
  tech: {
    fontSize: 14,
    color: "#1e90ff",
    fontWeight: "600",
  },
});
