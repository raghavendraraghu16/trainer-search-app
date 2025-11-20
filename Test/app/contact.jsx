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

const supportSections = [
  {
    title: "Urgent ops",
    description:
      "Facility access, last-minute cancellations, or injured clients.",
    icon: "alert-circle-outline",
    cta: "Ping ops hotline",
    accent: "#ffc94a",
  },
  {
    title: "Billing + accounts",
    description: "Invoices, payouts, tax docs, and updating payment info.",
    icon: "card-outline",
    cta: "Open billing center",
    accent: "#5cf4d4",
  },
];

const knowledge = [
  {
    title: "Client onboarding deck",
    detail: "Scripts, readiness checks, welcome email templates.",
  },
  {
    title: "Gear + facility perks",
    detail: "Verified partners, discount codes, booking policies.",
  },
  {
    title: "Product roadmap",
    detail: "See what’s shipping next and request beta access.",
  },
];

export default function SupportHubScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.badge}>Support Hub</Text>
        <Text style={styles.title}>Choose your lane</Text>
        <Text style={styles.subtitle}>
          Instant answers, scheduled office hours, and humans on standby when
          you need them.
        </Text>

        <View style={styles.contactCard}>
          <View style={styles.contactIcon}>
            <Ionicons name="chatbubbles-outline" size={26} color="#5cf4d4" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.contactTitle}>Live concierge</Text>
            <Text style={styles.contactBody}>
              Average response time is under 2 minutes. Tap below and we’ll open
              a secure thread.
            </Text>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Open chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        {supportSections.map((section) => (
          <View style={styles.sectionCard} key={section.title}>
            <View
              style={[
                styles.sectionIcon,
                { backgroundColor: `${section.accent}1F` },
              ]}
            >
              <Ionicons name={section.icon} size={22} color={section.accent} />
            </View>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionBody}>{section.description}</Text>
            <TouchableOpacity
              style={[styles.sectionBtn, { borderColor: section.accent }]}
            >
              <Text style={[styles.sectionBtnText, { color: section.accent }]}>
                {section.cta}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.knowledgeCard}>
          <Text style={styles.knowledgeTitle}>Knowledge drops</Text>
          {knowledge.map((item) => (
            <View style={styles.knowledgeRow} key={item.title}>
              <View>
                <Text style={styles.knowledgeItemTitle}>{item.title}</Text>
                <Text style={styles.knowledgeDetail}>{item.detail}</Text>
              </View>
              <Ionicons name="download-outline" size={18} color="#8a90c3" />
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Office hours</Text>
          <Text style={styles.footerBody}>
            Tue & Thu · 4:00 – 5:30 PM IST · RSVP to get the Zoom link and
            agenda 30 minutes prior.
          </Text>
          <TouchableOpacity style={styles.footerBtn}>
            <Text style={styles.footerBtnText}>Reserve a seat</Text>
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
    gap: 18,
  },
  badge: {
    color: "#5cf4d4",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
  },
  title: {
    color: "#f6f7fb",
    fontSize: 26,
    fontWeight: "800",
  },
  subtitle: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  contactCard: {
    flexDirection: "row",
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 20,
    gap: 16,
    alignItems: "flex-start",
  },
  contactIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "rgba(92,244,212,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },
  contactTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
  },
  contactBody: {
    color: "#b0b5d0",
    marginTop: 6,
    lineHeight: 20,
  },
  primaryBtn: {
    marginTop: 12,
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#5cf4d4",
  },
  primaryBtnText: {
    color: "#05091e",
    fontWeight: "700",
  },
  sectionCard: {
    backgroundColor: "#0b0f29",
    borderRadius: 20,
    padding: 18,
    gap: 10,
  },
  sectionIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#f6f7fb",
    fontSize: 17,
    fontWeight: "700",
  },
  sectionBody: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  sectionBtn: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 4,
  },
  sectionBtnText: {
    fontWeight: "700",
  },
  knowledgeCard: {
    backgroundColor: "#10163c",
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  knowledgeTitle: {
    color: "#f6f7fb",
    fontSize: 18,
    fontWeight: "700",
  },
  knowledgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  knowledgeItemTitle: {
    color: "#f6f7fb",
    fontWeight: "600",
  },
  knowledgeDetail: {
    color: "#8a90c3",
    marginTop: 2,
    fontSize: 13,
  },
  footer: {
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
  footerBody: {
    color: "#b0b5d0",
    lineHeight: 20,
  },
  footerBtn: {
    borderWidth: 1,
    borderColor: "rgba(92,244,212,0.6)",
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  footerBtnText: {
    color: "#5cf4d4",
    fontWeight: "700",
  },
});
