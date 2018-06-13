import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { latestLists } from './../../service/getData';

export default class SectionListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount(){
    try {
      const latestDate = await latestLists()
      let list = [
        {title: 'nid1', data:latestDate['nid1']},
        {title: 'nid2', data:latestDate['nid2']},
      ]
       console.log(list)
      this.setState({
        data: list,     
      });
    } catch(error) {
      console.error(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.title.substring(0,18)}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})