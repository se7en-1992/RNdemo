'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ScrollView from './../components/scrollView/scrollView';

export default class ScrollViewScreen extends React.Component {
  static navigationOptions = {
    title: '如何使用滚动视图',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView />
        <Button
            onPress={() => this.props.navigation.navigate('LongList')}
            title='Go to LongList'/>
      </View>
    );
  }
}