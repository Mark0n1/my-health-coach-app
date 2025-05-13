import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import app from './firebaseConfig'; // Import the Firebase app instance
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';

export default function App() {
  // Function to add a test user to Firestore, which also creates the 'users' collection if it doesn't exist
  const addTestUser = async () => {
    try {
      const db = getFirestore(app);
      // Check if we've already added the initial test user to avoid duplicates on hot reloads/re-renders
      // This is a simple flag; a more robust solution might involve checking Firestore
      if (global.initialUserAdded) {
        console.log("Initial test user already attempted to be added.");
        return;
      }
      global.initialUserAdded = true; // Set flag

      const docRef = await addDoc(collection(db, "users"), {
        name: "Initial Test User",
        email: "initial.test@example.com",
        createdAt: serverTimestamp()
      });
      console.log("Initial test user document written with ID: ", docRef.id);
      // Alert might be intrusive for general use, but good for initial verification
      // For a real app, you might remove this or make it conditional
      // alert("Initial test user added to Firestore. 'users' collection is now available!");
    } catch (e) {
      console.error("Error adding initial test user document: ", e);
      // alert("Error adding initial test user: " + e.message);
    }
  };

  useEffect(() => {
    console.log("Firebase initialized. App component mounted.");
    // Automatically add a test user on app load to ensure 'users' collection is created
    addTestUser();
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <View style={styles.container}>
      <Text>Expo App with Firebase & Firestore!</Text>
      <Text>The 'users' collection is automatically created/verified on app start.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

