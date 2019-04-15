import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchDeckResults } from '../utils/api'

export default class Decks extends React.Component {

  componentDidMount () {
    console.log('before')
    console.log(fetchDeckResults())
  }
  render() {
    return (
      <View >
        <Text>bla bla bla bla bla </Text>
      </View>
    );
  }
}