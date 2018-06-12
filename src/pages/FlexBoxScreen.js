'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import FlexDirection from './../components/flexbox/flexDirection';
import JustifyContent from './../components/flexbox/justifyContent';
import AlignItems from './../components/flexbox/alignItems';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'flexbox',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <FlexDirection />
        <JustifyContent />
        <AlignItems />
      </View>
    );
  }
}