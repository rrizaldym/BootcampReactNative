import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// import Tugas12 from './Tugas/Tugas12/App'
// import Tugas13 from './Tugas/Tugas13/App'
// import Tugas14 from './Tugas/Tugas14/App'
// import Src from './Tugas/TugasNavigation/src/index'
import Tugas15 from './Tugas/Tugas15/App'
import TugasNavigation from './Tugas/TugasNavigation/index'

export default function App() {
  return (
    <TugasNavigation />

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
