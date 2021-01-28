import React from 'react';
import LoginScreen from './LoginScreen'
import AboutScreen from './AboutScreen'
import { ScrollView, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>

      <LoginScreen/>
      <AboutScreen/>
      </ScrollView>
    )
  }
}
