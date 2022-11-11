import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { FacebookSignIn } from './src/components/FacebookSignIn';
import UserDetailsCard from './src/components/UserDetailsCard';
import { myConfig } from './config';

GoogleSignin.configure({
  scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: myConfig.webClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

export default function App() {
  // Set an initializing state while Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log("\n\n User: ", user)
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <FacebookSignIn />
    );
  }

  return (
    <UserDetailsCard
      user={user}
    />
  );
}

