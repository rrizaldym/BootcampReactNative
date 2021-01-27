import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Tugas12 from './Tugas/Tugas12/App'
import LoginScreen from './Tugas/Tugas13/LoginScreen'
import AboutScreen from './Tugas/Tugas13/AboutScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <AboutScreen />
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
