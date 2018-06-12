'use strict';

import React, { Component } from 'react';
import { View, Button } from 'react-native';
import TextInput from './../components/textInput/textInput';

export default class TextInputScreen extends React.Component {
  static navigationOptions = {
    title: '处理文本输入',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <TextInput />
        <Button
            onPress={() => this.props.navigation.navigate('ScrollView')}
            title='Go to ScrollView'/>
      </View>
    );
  }
}