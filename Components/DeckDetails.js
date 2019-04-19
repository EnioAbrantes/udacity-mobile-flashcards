import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white, gray, black } from '../utils/colors'
import { connect } from 'react-redux'

class DeckDetails extends Component {
  
  render(){
    
    return (
      <View>
        <Text style={{color: purple, fontSize: 25}}>
        {this.props.navigation.state.params.deck.title}
        </Text>
        <Text style={{color: purple, fontSize: 25}}>
        {this.props.navigation.state.params.deck.questions.length}
        </Text>
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() => this.props.navigation.navigate(
            'NewCard',
            {deck : this.props.navigation.state.params.deck}
        )}>
          <Text >Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startQuizBtn}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {questions : this.props.navigation.state.params.deck.questions}
        )}>
          <Text >Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  addCardBtn: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: black,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  startQuizBtn: {
    backgroundColor: gray,
    padding: 10,
    borderRadius: 50,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
})

function mapStateToProps (state){
  return {
    state
  }
}

export default connect(mapStateToProps)(DeckDetails)

