import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>

      {/* HOME */}
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={26} color={color} />
          ),
        }}
      />

      {/* PROJECT */}
      <Tabs.Screen
        name="Project"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={26} color={color} />
          ),
        }}
      />

      {/* CONTACT */}
      <Tabs.Screen
        name="Contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call-outline" size={26} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
