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
    from: "bot",
    text: "Hey Raghu, this is Support Crew. Need help with billing, accounts, or gear?",
    timestamp: "11:22",
  },
  {
    id: "2",
    from: "user",
    text: "Payment for the weekend retreat didn’t go through.",
    timestamp: "11:23",
  },
  {
    id: "3",
    from: "bot",
    text: "On it. I can resend the link, switch payment method, or loop in ops.",
    timestamp: "11:23",
    tags: ["Billing", "Fast-track"],
  },
];

const quickHelps = [
  "Send payment link",
  "Escalate to ops",
  "Share phone number",
];

export default function SupportChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const handleSend = (value) => {
    const text = (value ?? draft).trim();
    if (!text) return;
    const userMessage = {
      id: Date.now().toString(),
      from: "user",
      text,
      timestamp: formatNow(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          from: "bot",
          text: "Logged that for ops. You’ll get a confirmation email in a minute.",
          timestamp: formatNow(),
          tags: ["Ticket #4138"],
        },
      ]);
    }, 900);
  };

  const renderItem = ({ item }) => <ChatBubble {...item} />;

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.badge}>Support Crew</Text>
            <Text style={styles.title}>Live humans + automation</Text>
            <Text style={styles.subtitle}>
              Ask anything: billing, facility access, client invites, or product
              bugs.
            </Text>
          </View>
          <View style={styles.statusPill}>
            <View style={styles.onlineDot} />
            <Text style={styles.statusText}>Responding under 2 min</Text>
          </View>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.quickRow}>
          {quickHelps.map((help) => (
            <TouchableOpacity
              key={help}
              style={styles.quickChip}
              onPress={() => handleSend(help)}
            >
              <Ionicons name="flash-outline" size={14} color="#5cf4d4" />
              <Text style={styles.quickText}>{help}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.composer}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Write your message…"
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

function ChatBubble({ from, text, timestamp, tags }) {
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
      <View style={styles.metaRow}>
        <Text style={[styles.time, isUser && { color: "#05091e" }]}>
          {timestamp}
        </Text>
        {tags?.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
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
    gap: 8,
  },
  badge: {
    color: "#5cf4d4",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 12,
  },
  title: {
    color: "#f6f7fb",
    fontSize: 24,
    fontWeight: "800",
  },
  subtitle: {
    color: "#b0b5d0",
    marginTop: 6,
    lineHeight: 20,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: "rgba(92,244,212,0.12)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#43ffbf",
  },
  statusText: {
    color: "#5cf4d4",
    fontWeight: "600",
    fontSize: 12,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    gap: 16,
  },
  bubble: {
    maxWidth: "88%",
    padding: 16,
    borderRadius: 20,
  },
  bubbleBot: {
    backgroundColor: "#10163c",
    borderTopLeftRadius: 8,
  },
  bubbleUser: {
    backgroundColor: "#5cf4d4",
    borderTopRightRadius: 8,
  },
  bubbleText: {
    color: "#f6f7fb",
    fontSize: 15,
    lineHeight: 21,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },
  time: {
    color: "#8a90c3",
    fontSize: 11,
  },
  tag: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(92,244,212,0.35)",
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  tagText: {
    color: "#5cf4d4",
    fontSize: 10,
    fontWeight: "600",
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
    paddingHorizontal: 16,
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
