'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import FlatList from './../components/longList/flatList';
import SectionList from './../components/longList/sectionList';

export default class LongListScreen extends React.Component {
  static navigationOptions = {
    title: '如何使用长列表',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <FlatList />
        <SectionList />
        <Button
            onPress={() => this.props.navigation.navigate('TextInput')}
            title='Go to TextInput'/>
      </View>
    );
  }
}