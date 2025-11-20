import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const programs = [
  {
    id: "1",
    title: "Hybrid Strength Sprint",
    duration: "4 weeks · 5 sessions / week",
    focus: "Strength + Power",
    status: "Active",
    progress: 0.65,
  },
  {
    id: "2",
    title: "Mobility Rebuild",
    duration: "6 weeks · 3 sessions / week",
    focus: "Mobility + Recovery",
    status: "In Planning",
    progress: 0.25,
  },
];

const caseStudies = [
  {
    id: "a",
    name: "Velocity Crew",
    outcome: "12% faster 5K times",
    summary:
      "Built a progressive overload plan layered with regen protocols and guided breathwork.",
  },
  {
    id: "b",
    name: "Studio Thrive",
    outcome: "8-week retention +31%",
    summary:
      "Delivered a modular HIIT curriculum with onboarding, live QA, and marketing assets.",
  },
];

export default function Project() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Programs & Launches</Text>
      <Text style={styles.subtitle}>
        Track how each initiative is performing, what’s next in the roadmap, and
        quick wins worth sharing with the collective.
      </Text>

      <Text style={styles.sectionLabel}>Currently building</Text>
      {programs.map((program) => (
        <View style={styles.programCard} key={program.id}>
          <View style={styles.programHeader}>
            <Text style={styles.programTitle}>{program.title}</Text>
            <View
              style={[
                styles.statusPill,
                program.status === "Active"
                  ? styles.statusActive
                  : styles.statusPlanning,
              ]}
            >
              <Ionicons
                name={
                  program.status === "Active"
                    ? "pulse-outline"
                    : "sparkles-outline"
                }
                size={14}
                color="#05091e"
              />
              <Text style={styles.statusText}>{program.status}</Text>
            </View>
          </View>
          <Text style={styles.programMeta}>{program.duration}</Text>
          <Text style={styles.programMeta}>{program.focus}</Text>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${program.progress * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.progressCopy}>
            {Math.round(program.progress * 100)}% complete
          </Text>
        </View>
      ))}

      <Text style={styles.sectionLabel}>Case studies & wins</Text>
      {caseStudies.map((study) => (
        <View style={styles.caseCard} key={study.id}>
          <View style={styles.caseHeader}>
            <Ionicons
              name="trophy-outline"
              size={20}
              color="rgba(92,244,212,0.85)"
            />
            <Text style={styles.caseName}>{study.name}</Text>
          </View>
          <Text style={styles.caseOutcome}>{study.outcome}</Text>
          <Text style={styles.caseSummary}>{study.summary}</Text>
        </View>
      ))}

      <View style={styles.timelineCard}>
        <Text style={styles.sectionLabel}>Launch timeline</Text>
        <TimelineItem
          title="Prototype review"
          meta="Thu · 2:00 PM · Design guild"
        />
        <TimelineItem
          title="Pilot cohort kickoff"
          meta="Nov 28 · 12 athletes confirmed"
        />
        <TimelineItem
          title="Public waitlist drop"
          meta="Dec 12 · Marketing + Ops"
        />
      </View>
    </ScrollView>
  );
}

function TimelineItem({ title, meta }) {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineCopy}>
        <Text style={styles.timelineTitle}>{title}</Text>
        <Text style={styles.timelineMeta}>{meta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030515",
    padding: 20,
  },
  title: {
    color: "#f6f7fb",
    fontSize: 26,
    fontWeight: "800",
  },
  subtitle: {
    color: "#b0b5d0",
    marginTop: 8,
    lineHeight: 20,
    marginBottom: 24,
  },
  sectionLabel: {
    color: "#8a90c3",
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  programCard: {
    backgroundColor: "#0b0f29",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  programHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  programTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
  },
  programMeta: {
    color: "#8a90c3",
    marginTop: 6,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 6,
  },
  statusActive: {
    backgroundColor: "#5cf4d4",
  },
  statusPlanning: {
    backgroundColor: "#ffc94a",
  },
  statusText: {
    color: "#05091e",
    fontWeight: "700",
    fontSize: 12,
  },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(92,244,212,0.2)",
    marginTop: 16,
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#5cf4d4",
  },
  progressCopy: {
    color: "#b0b5d0",
    marginTop: 8,
    fontSize: 12,
  },
  caseCard: {
    backgroundColor: "#10163c",
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  caseHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  caseName: {
    color: "#f6f7fb",
    fontWeight: "700",
    fontSize: 16,
  },
  caseOutcome: {
    color: "#5cf4d4",
    marginTop: 6,
    fontWeight: "700",
  },
  caseSummary: {
    color: "#b0b5d0",
    marginTop: 6,
    lineHeight: 20,
  },
  timelineCard: {
    backgroundColor: "#0b0f29",
    borderRadius: 20,
    padding: 20,
    marginTop: 6,
  },
  timelineItem: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#5cf4d4",
    marginTop: 6,
  },
  timelineCopy: {
    flex: 1,
  },
  timelineTitle: {
    color: "#f6f7fb",
    fontWeight: "700",
  },
  timelineMeta: {
    color: "#8a90c3",
    marginTop: 2,
  },
});
