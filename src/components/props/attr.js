'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Greeting extends Component {
  render() {
    return (
      <Text style={styles.red}>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
    fontSize: 30
  }
});