import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { announceLists } from './../../service/getData';

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  async componentDidMount(){
    try {
      const announceDate = await announceLists()
      console.log(announceDate)
      this.setState({
        data: announceDate.articleList,     
      });
    } catch(error) {
      console.error(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.title.substring(0,18)}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})