import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white, gray, black } from '../utils/colors'
import { connect } from 'react-redux'

class DeckDetails extends Component {
  
  render(){
    
    return (
      <View style={styles.container}>
        <Text style={styles.deckTitleText}>
        {this.props.navigation.state.params.deck.title}
        </Text>
        <Text style={styles.deckCardsText}>
        {`${this.props.navigation.state.params.deck.questions.length} ${this.props.navigation.state.params.deck.questions.length === 1? 'card' : 'cards'}`}
        </Text>
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() => this.props.navigation.navigate(
            'NewCard',
            {deck : this.props.navigation.state.params.deck}
        )}>
          <Text style={styles.addCardText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startQuizBtn}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {questions : this.props.navigation.state.params.deck.questions}
        )}>
          <Text style={styles.startQuizText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCardBtn: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: black,
    height: 50,
    width : 250,
  },
  startQuizBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginTop: 10,
    width : 250,
  },
  startQuizText: {
    color : white,
    textAlign: 'center',
    fontSize: 22,
  },
  addCardText: {
    textAlign: 'center',
    fontSize: 22,
  },
  deckTitleText: {
    color: black,
    fontSize: 35,
    marginBottom : 5,
  },
  deckCardsText: {
    color: gray, 
    fontSize: 20,
    marginBottom : 120,
  },
})

function mapStateToProps (state){
  return {
    state
  }
}

export default connect(mapStateToProps)(DeckDetails)

