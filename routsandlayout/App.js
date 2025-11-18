import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const userProfile = {
    name: "Niranjan",
    age: 25,
    email: "niranjan@example.com",
    location: "Srirangapatna, India",
    interests: ["fitness", "coding", "traveling"]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>Name: {userProfile.name}</Text>
      <Text>Age: {userProfile.age}</Text>
      <Text>Email: {userProfile.email}</Text>
      <Text>Location: {userProfile.location}</Text>
      <Text>Interests: {userProfile.interests.join(", ")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});