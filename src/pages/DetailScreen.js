'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import Fixed from './../components/width/fixed';
import Flex from './../components/width/flex';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: '详情页',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Fixed />
        <Flex />
      </View>
    );
  }
}