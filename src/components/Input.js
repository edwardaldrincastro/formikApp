import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TextInput 
      placeholder="Enter text"
      style={styles.inputStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#000'
  },
});

export default Input;
