import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const goals = [
  { label: "Weekly Sessions", value: "05 / 06", progress: 0.82 },
  { label: "Mobility Minutes", value: "140 / 180", progress: 0.64 },
  { label: "Recovery Days", value: "2 scheduled", progress: 1 },
];

const schedule = [
  {
    id: "1",
    title: "Strength Foundations",
    coach: "Coach Avani",
    time: "Today · 5:00 PM",
    location: "Form Lab · Studio 3",
  },
  {
    id: "2",
    title: "Breathwork Reset",
    coach: "Coach Malik",
    time: "Fri · 7:30 AM",
    location: "Haven Remote",
  },
  {
    id: "3",
    title: "Run Conditioning",
    coach: "Coach Theo",
    time: "Sun · 8:00 AM",
    location: "Seaside Track",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Ionicons name="flame-outline" color="#5cf4d4" size={24} />
          </View>
          <View style={styles.heroText}>
            <Text style={styles.heroOverline}>This week</Text>
            <Text style={styles.heroTitle}>Consistency unlocked</Text>
            <Text style={styles.heroSubtitle}>
              You’re one session away from hitting your streak goal.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Goals snapshot</Text>
          <Text style={styles.sectionLink}>Customize</Text>
        </View>

        <View style={styles.goalGrid}>
          {goals.map((goal) => (
            <View style={styles.goalCard} key={goal.label}>
              <Text style={styles.goalLabel}>{goal.label}</Text>
              <Text style={styles.goalValue}>{goal.value}</Text>
              <View style={styles.progressTrack}>
                <View
                  style={[styles.progressFill, { width: `${goal.progress * 100}%` }]}
                />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming schedule</Text>
          <Text style={styles.sectionLink}>Sync calendar</Text>
        </View>

        {schedule.map((item) => (
          <View style={styles.sessionCard} key={item.id}>
            <View style={styles.sessionBadge}>
              <Ionicons name="pulse" size={20} color="#05091e" />
            </View>
            <View style={styles.sessionCopy}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionMeta}>{item.time}</Text>
              <Text style={styles.sessionCoach}>{item.coach}</Text>
              <Text style={styles.sessionMeta}>{item.location}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8a90c3" />
          </View>
        ))}

        <View style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Ionicons name="leaf-outline" size={22} color="#5cf4d4" />
          </View>
          <View style={styles.tipCopy}>
            <Text style={styles.tipTitle}>Wellness insight</Text>
            <Text style={styles.tipBody}>
              Cold plunge after your Thursday lift can reduce recovery time by
              18%. Add it to your plan?
            </Text>
          </View>
          <Ionicons name="add-circle-outline" size={24} color="#5cf4d4" />
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
  hero: {
    flexDirection: "row",
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 18,
    alignItems: "center",
    gap: 16,
  },
  heroIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(92,244,212,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },
  heroText: {
    flex: 1,
  },
  heroOverline: {
    color: "#8a90c3",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1,
  },
  heroTitle: {
    color: "#f6f7fb",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
  },
  heroSubtitle: {
    color: "#b0b5d0",
    marginTop: 6,
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#e9ecff",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionLink: {
    color: "#5cf4d4",
    fontWeight: "600",
  },
  goalGrid: {
    gap: 16,
  },
  goalCard: {
    backgroundColor: "#0b0f29",
    borderRadius: 18,
    padding: 18,
  },
  goalLabel: {
    color: "#8a90c3",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1,
  },
  goalValue: {
    color: "#f6f7fb",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 6,
  },
  progressTrack: {
    height: 8,
    borderRadius: 99,
    backgroundColor: "rgba(92,244,212,0.12)",
    marginTop: 12,
  },
  progressFill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#5cf4d4",
  },
  sessionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0f29",
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    gap: 14,
  },
  sessionBadge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#5cf4d4",
    justifyContent: "center",
    alignItems: "center",
  },
  sessionCopy: {
    flex: 1,
  },
  sessionTitle: {
    color: "#f6f7fb",
    fontSize: 16,
    fontWeight: "700",
  },
  sessionMeta: {
    color: "#8a90c3",
    marginTop: 2,
  },
  sessionCoach: {
    color: "#5cf4d4",
    marginTop: 6,
    fontWeight: "600",
  },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 18,
    gap: 14,
  },
  tipIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "rgba(92,244,212,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },
  tipCopy: {
    flex: 1,
    gap: 4,
  },
  tipTitle: {
    color: "#f6f7fb",
    fontWeight: "700",
  },
  tipBody: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
});
