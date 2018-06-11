'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Logoimg extends Component {
  render() {
    let pic = {
      uri: 'https://m.hybjf.com/images/logo.png'
    };
    return (
      <Image source={pic} style={{width: 110, height: 30}} />
    );
  }
}