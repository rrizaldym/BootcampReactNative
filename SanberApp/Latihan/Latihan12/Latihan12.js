import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Useless Placeholder',
    };
  }

  render() {
    return (
      <View style={{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
      }}>
        <TextInput
          style={{ 
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
        }}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.value}
        />
        <Text>{this.state.value}</Text>
      </View>
    );
  }
}