import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const initialMessages = [
  {
    id: "1",
    type: "text",
    from: "bot",
    text: "Morning Raghu — Session Flow has your week staged. Want me to reshuffle anything?",
    timestamp: "07:42",
  },
  {
    id: "2",
    type: "agenda",
    from: "bot",
    items: [
      { title: "Today · 5:15 PM", detail: "Strength lab · Coach Avani" },
      { title: "Thu · 7:30 AM", detail: "Remote breathwork · Malik" },
      { title: "Sat · 8:00 AM", detail: "Trail prep · Theo" },
    ],
    timestamp: "07:42",
  },
  {
    id: "3",
    type: "text",
    from: "user",
    text: "Slide today’s lift to Thursday night? My lab review got extended.",
    timestamp: "07:43",
  },
  {
    id: "4",
    type: "checklist",
    from: "bot",
    title: "Shift strength block",
    steps: [
      "Ping Avani for new slot",
      "Auto-move conditioning cooldown",
      "Add recovery tag to Friday",
    ],
    timestamp: "07:43",
  },
];

const quickReplies = ["Reschedule", "Log soreness", "Share readiness score"];

export default function SessionChatScreen() {
  const [feed, setFeed] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const handleSend = (value) => {
    const text = (value ?? draft).trim();
    if (!text) return;
    const userMessage = {
      id: Date.now().toString(),
      type: "text",
      from: "user",
      text,
      timestamp: formatNow(),
    };
    setFeed((prev) => [...prev, userMessage]);
    setDraft("");
    setTimeout(() => {
      setFeed((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          type: "text",
          from: "bot",
          text: "Cool, marking that. I’ll confirm times once coaches reply.",
          timestamp: formatNow(),
        },
      ]);
    }, 900);
  };

  const renderItem = ({ item }) => {
    if (item.type === "agenda") {
      return <AgendaBubble {...item} />;
    }
    if (item.type === "checklist") {
      return <ChecklistBubble {...item} />;
    }
    return <ChatBubble {...item} />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.badge}>Session Flow</Text>
            <Text style={styles.title}>Your weekly co-pilot</Text>
            <Text style={styles.subtitle}>
              Ask to shift sessions, sync calendars, or log recovery in one
              chat.
            </Text>
          </View>
          <Ionicons name="time-outline" size={26} color="#5cf4d4" />
        </View>

        <FlatList
          data={feed}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.quickRow}>
          {quickReplies.map((reply) => (
            <TouchableOpacity
              key={reply}
              style={styles.quickChip}
              onPress={() => handleSend(reply)}
            >
              <Ionicons name="flash-outline" size={14} color="#5cf4d4" />
              <Text style={styles.quickText}>{reply}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.composer}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Tell Flow what you need…"
            placeholderTextColor="#8a90c3"
            style={styles.input}
            multiline
          />
          <TouchableOpacity style={styles.sendBtn} onPress={() => handleSend()}>
            <Ionicons name="send" size={18} color="#05091e" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function ChatBubble({ from, text, timestamp }) {
  const isUser = from === "user";
  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.bubbleUser : styles.bubbleBot,
        isUser ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" },
      ]}
    >
      <Text style={[styles.bubbleText, isUser && { color: "#05091e" }]}>
        {text}
      </Text>
      <Text style={[styles.time, isUser && { color: "#05091e" }]}>
        {timestamp}
      </Text>
    </View>
  );
}

function AgendaBubble({ items, timestamp }) {
  return (
    <View style={[styles.bubble, styles.agendaBubble]}>
      <Text style={styles.agendaTitle}>Agenda overview</Text>
      {items.map((item) => (
        <View key={item.title} style={styles.agendaRow}>
          <View style={styles.agendaDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.agendaPrimary}>{item.title}</Text>
            <Text style={styles.agendaSecondary}>{item.detail}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.time}>{timestamp}</Text>
    </View>
  );
}

function ChecklistBubble({ title, steps, timestamp }) {
  return (
    <View style={[styles.bubble, styles.checkBubble]}>
      <Text style={styles.agendaTitle}>{title}</Text>
      {steps.map((step) => (
        <View key={step} style={styles.checkRow}>
          <Ionicons name="checkbox-outline" size={16} color="#5cf4d4" />
          <Text style={styles.agendaSecondary}>{step}</Text>
        </View>
      ))}
      <Text style={styles.time}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#030515",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
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
    fontSize: 24,
    fontWeight: "800",
    marginTop: 6,
  },
  subtitle: {
    color: "#b0b5d0",
    lineHeight: 20,
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    gap: 16,
  },
  bubble: {
    maxWidth: "88%",
    padding: 14,
    borderRadius: 20,
  },
  bubbleBot: {
    backgroundColor: "#10163c",
    borderTopLeftRadius: 6,
  },
  bubbleUser: {
    backgroundColor: "#5cf4d4",
    borderTopRightRadius: 6,
  },
  bubbleText: {
    color: "#f6f7fb",
    fontSize: 15,
    lineHeight: 21,
  },
  time: {
    fontSize: 11,
    color: "#8a90c3",
    marginTop: 8,
  },
  agendaBubble: {
    backgroundColor: "#0b0f29",
  },
  agendaTitle: {
    color: "#f6f7fb",
    fontWeight: "700",
    marginBottom: 10,
  },
  agendaRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  agendaDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#5cf4d4",
    marginTop: 6,
  },
  agendaPrimary: {
    color: "#f6f7fb",
    fontWeight: "600",
  },
  agendaSecondary: {
    color: "#b0b5d0",
    fontSize: 13,
    marginTop: 2,
  },
  checkBubble: {
    backgroundColor: "#10163c",
  },
  checkRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  quickRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 20,
  },
  quickChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#10163c",
    borderWidth: 1,
    borderColor: "rgba(92,244,212,0.35)",
  },
  quickText: {
    color: "#f6f7fb",
    fontWeight: "600",
  },
  composer: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    backgroundColor: "#05091e",
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    color: "#f6f7fb",
    fontSize: 15,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#5cf4d4",
    alignItems: "center",
    justifyContent: "center",
  },
});

function formatNow() {
  const date = new Date();
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}
