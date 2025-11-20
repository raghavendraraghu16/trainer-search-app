import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const categories = ["Strength", "Yoga", "Cardio", "Rehab", "Mindfulness"];
const highlights = [
  { label: "Active Clients", value: "18" },
  { label: "Sessions This Week", value: "32" },
  { label: "Avg. Rating", value: "4.9" },
];

const upcomingSessions = [
  {
    id: "1",
    title: "Mobility Reset",
    time: "Today · 6:30 PM",
    coach: "Kaylin Ross",
  },
  {
    id: "2",
    title: "Power HIIT",
    time: "Fri · 7:00 AM",
    coach: "Theo Brooks",
  },
  {
    id: "3",
    title: "Mindful Strength",
    time: "Sat · 9:15 AM",
    coach: "Leslie Kim",
  },
];

export default function Discover() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.badge}>Trainer Search</Text>
        <Text style={styles.title}>Find the perfect coach nearby</Text>
        <Text style={styles.subtitle}>
          Explore trusted trainers, compare programs, and book a session in
          seconds.
        </Text>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#8a90c3" />
          <TextInput
            placeholder="Try 'Pilates' or 'Mobility'"
            placeholderTextColor="#8a90c3"
            style={styles.input}
          />
          <Ionicons name="options-outline" size={20} color="#5cf4d4" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map((label) => (
            <View key={label} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{label}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.featuredCard}>
          <View>
            <Text style={styles.featuredEyebrow}>Featured Trainer</Text>
            <Text style={styles.featuredName}>Amelia Quinn</Text>
            <Text style={styles.featuredRole}>Strength & Mobility · 8 yrs</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#ffc94a" />
              <Text style={styles.ratingText}>4.97 · 210 reviews</Text>
            </View>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>View Profile</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400",
            }}
            style={styles.featuredImage}
          />
        </View>

        <View style={styles.metricsRow}>
          {highlights.map((metric) => (
            <View style={styles.metricCard} key={metric.label}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming sessions</Text>
          <TouchableOpacity>
            <Text style={styles.link}>See all</Text>
          </TouchableOpacity>
        </View>

        {upcomingSessions.map((session) => (
          <View style={styles.sessionCard} key={session.id}>
            <View style={styles.sessionIcon}>
              <Ionicons name="calendar-outline" size={18} color="#5cf4d4" />
            </View>
            <View style={styles.sessionContent}>
              <Text style={styles.sessionTitle}>{session.title}</Text>
              <Text style={styles.sessionMeta}>{session.time}</Text>
              <Text style={styles.sessionCoach}>Coach {session.coach}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#8a90c3" />
          </View>
        ))}

        <TouchableOpacity style={styles.secondaryBtn}>
          <Ionicons name="locate-outline" size={18} color="#05091e" />
          <Text style={styles.secondaryBtnText}>Find coaches near me</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#040615",
  },
  container: {
    padding: 20,
    gap: 20,
  },
  badge: {
    color: "#5cf4d4",
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 12,
  },
  title: {
    fontSize: 28,
    color: "#f6f7fb",
    fontWeight: "800",
  },
  subtitle: {
    color: "#b0b5d0",
    fontSize: 15,
    lineHeight: 22,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0f29",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  input: {
    flex: 1,
    color: "#f6f7fb",
    fontSize: 15,
  },
  categoryRow: {
    gap: 12,
  },
  categoryChip: {
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: "#10163c",
    borderWidth: 1,
    borderColor: "rgba(92,244,212,0.25)",
  },
  categoryText: {
    color: "#e3e6ff",
    fontWeight: "600",
  },
  featuredCard: {
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  featuredEyebrow: {
    color: "#8a90c3",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  featuredName: {
    color: "#f6f7fb",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 4,
  },
  featuredRole: {
    color: "#b0b5d0",
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  ratingText: {
    color: "#f6f7fb",
    fontWeight: "600",
  },
  featuredImage: {
    width: 110,
    height: 140,
    borderRadius: 14,
    marginLeft: 16,
  },
  primaryBtn: {
    marginTop: 14,
    backgroundColor: "#5cf4d4",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignSelf: "flex-start",
  },
  primaryBtnText: {
    color: "#05091e",
    fontWeight: "700",
  },
  metricsRow: {
    flexDirection: "row",
    gap: 12,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "#0b0f29",
    borderRadius: 18,
    padding: 16,
  },
  metricValue: {
    color: "#f6f7fb",
    fontSize: 22,
    fontWeight: "800",
  },
  metricLabel: {
    color: "#8a90c3",
    marginTop: 4,
    fontSize: 12,
    textTransform: "uppercase",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
  },
  link: {
    color: "#5cf4d4",
    fontWeight: "600",
  },
  sessionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0b0f29",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    gap: 14,
  },
  sessionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(92,244,212,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  sessionContent: {
    flex: 1,
  },
  sessionTitle: {
    color: "#f6f7fb",
    fontWeight: "700",
    fontSize: 16,
  },
  sessionMeta: {
    color: "#8a90c3",
    marginTop: 2,
  },
  sessionCoach: {
    color: "#5cf4d4",
    marginTop: 4,
    fontWeight: "600",
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#5cf4d4",
    paddingVertical: 14,
    borderRadius: 18,
    marginTop: 4,
  },
  secondaryBtnText: {
    color: "#05091e",
    fontWeight: "700",
  },
});
