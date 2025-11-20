import { API_URL } from "src/chatbot/config";
import getBotReply from "src/api/chatApi";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: "1", role: "assistant", text: "Hi! I'm UniBot. Ask me anything." },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const flatRef = useRef();

  const sendMessage = async () => {
    if (!text.trim()) return;

    const userMsg = { id: Date.now().toString(), role: "user", text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setText("");
    setLoading(true);

    const replyText = await getBotReply(updated);
    const botMsg = { id: `${Date.now()}-bot`, role: "assistant", text: replyText };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
    setTimeout(() => flatRef.current?.scrollToEnd({ animated: true }), 50);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.role === "user";
    return (
      <View style={[styles.msgRow, isUser ? styles.right : styles.left]}>
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
          <Text style={{ color: isUser ? "#000" : "#fff" }}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 12 }}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.send}>
          {loading ? <ActivityIndicator /> : <Ionicons name="send" size={22} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  msgRow: { marginVertical: 6, maxWidth: "75%" },
  left: { alignSelf: "flex-start" },
  right: { alignSelf: "flex-end" },
  bubble: { padding: 10, borderRadius: 10 },
  userBubble: { backgroundColor: "#e5e7eb" },
  botBubble: { backgroundColor: "#1e293b" },
  inputRow: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "#334155",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: "#f1f5f9",
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  send: {
    marginLeft: 10,
    backgroundColor: "#e2e8f0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
