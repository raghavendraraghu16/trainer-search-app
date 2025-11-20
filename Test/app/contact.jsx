import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const contactMethods = [
  {
    id: "1",
    label: "Live concierge",
    description: "Chat with our support crew in under 2 minutes.",
    hours: "Weekdays · 6AM – 11PM",
    icon: "chatbubble-ellipses-outline",
  },
  {
    id: "2",
    label: "Voice line",
    description: "Need a real human? Call and we’ll route your coach.",
    hours: "+91 90816 11234",
    icon: "call-outline",
  },
  {
    id: "3",
    label: "Community space",
    description: "Drop questions, share wins, and review resources.",
    hours: "Circle · #trainer-search",
    icon: "people-outline",
  },
];

export default function Contact() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>We’re here for every rep</Text>
        <Text style={styles.subtitle}>
          Reach the trainer success crew however you like—live chat, curated
          knowledge drops, or an old-school phone call.
        </Text>

        <View style={styles.cardHighlight}>
          <View style={styles.cardIcon}>
            <Ionicons name="sparkles-outline" size={26} color="#5cf4d4" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>New client concierge</Text>
            <Text style={styles.cardBody}>
              Personal onboarding within 24 hours for every athlete you bring
              on. We handle paperwork, readiness checks, and scheduling.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#5cf4d4" />
        </View>

        {contactMethods.map((method) => (
          <View style={styles.methodCard} key={method.id}>
            <View style={styles.methodIcon}>
              <Ionicons name={method.icon} size={20} color="#05091e" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.methodLabel}>{method.label}</Text>
              <Text style={styles.methodDescription}>{method.description}</Text>
              <Text style={styles.methodHours}>{method.hours}</Text>
            </View>
            <Ionicons name="arrow-forward" size={16} color="#8a90c3" />
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Need to escalate?</Text>
          <Text style={styles.sectionCopy}>
            Ping the ops hotline with urgent issues like last-minute facility
            changes or payment blockers. We’ll respond in under 10 minutes.
          </Text>
          <TouchableOpacity style={styles.opsButton}>
            <Ionicons name="alert-circle-outline" size={18} color="#05091e" />
            <Text style={styles.opsButtonText}>Escalate to ops</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Office hours</Text>
          <Text style={styles.footerCopy}>
            Tue & Thu · 4:00 – 5:30 PM IST · Zoom link drops 30 mins prior in
            your inbox and inside the community space.
          </Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Reserve a seat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#030515",
  },
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    color: "#f6f7fb",
    fontSize: 26,
    fontWeight: "800",
  },
  subtitle: {
    color: "#b0b5d0",
    marginTop: 10,
    lineHeight: 20,
  },
  cardHighlight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 18,
    gap: 14,
  },
  cardIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "rgba(92,244,212,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardBody: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0f29",
    borderRadius: 20,
    padding: 18,
    gap: 14,
  },
  methodIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#5cf4d4",
    justifyContent: "center",
    alignItems: "center",
  },
  methodLabel: {
    color: "#f6f7fb",
    fontSize: 16,
    fontWeight: "700",
  },
  methodDescription: {
    color: "#b0b5d0",
    marginTop: 4,
  },
  methodHours: {
    color: "#5cf4d4",
    marginTop: 4,
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 20,
    gap: 10,
  },
  sectionLabel: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionCopy: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  opsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#ffc94a",
    borderRadius: 18,
    paddingVertical: 12,
    marginTop: 6,
  },
  opsButtonText: {
    color: "#05091e",
    fontWeight: "700",
  },
  footerCard: {
    backgroundColor: "#0b0f29",
    borderRadius: 24,
    padding: 20,
    gap: 10,
  },
  footerTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
  },
  footerCopy: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  footerButton: {
    borderWidth: 1,
    borderColor: "rgba(92,244,212,0.6)",
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 6,
  },
  footerButtonText: {
    color: "#5cf4d4",
    fontWeight: "700",
  },
});
