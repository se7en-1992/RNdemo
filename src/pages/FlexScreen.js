'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Fixed from './../components/width/fixed';
import Flex from './../components/width/flex';

export default class FlexScreen extends React.Component {
  static navigationOptions = {
    title: '宽度和高度',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Fixed />
        <Flex />
        <Button
            onPress={() => this.props.navigation.navigate('FlexBox')}
            title='Go to FlexBox'/>
      </View>
    );
  }
}