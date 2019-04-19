import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { purple } from '../utils/colors'
import { submitCardEntry } from '../utils/api'
import { addCard } from '../actions/index'
import { connect } from 'react-redux'

class NewCard extends Component {

  state = {
    question : '',
    answer : ''
  }

  handleQuestion = (question) => {
      this.setState({question : question})
  }

  handleAnswer = (answer) => {
      this.setState({answer : answer})
  }

  handleAddCard = () => {
    const { question, answer } = this.state
    let key = this.props.navigation.state.params.deck.title

    let newQuestion = this.props.navigation.state.params.deck.questions.push({
      questions : question,
      answer : answer
    })

    console.log('newcard' + submitCardEntry(key, {
      question : question,
      answer : answer
    }))

    this.props.dispatch(addCard({[key] : {
      title : key,
      questions : newQuestion,
    }}))

    return () => this.props.navigation.navigate(
      'DeckDetails',
      {deck : this.props.navigation.state.params.deck}
    )

}

  render(){
    return (
      <View style={styles.container}> 
              <TextInput
                  style={styles.deckName}
                  placeholder={this.props.navigation.state.params.deck.title}
                  onChangeText={(question) => this.handleQuestion(question)}
              />
              <TextInput
                  style={styles.deckName}
                  placeholder="Deck Title"
                  onChangeText={(answer) => this.handleAnswer(answer)}
              />
              <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleAddCard()}>
                  <Text >Submit</Text>
              </TouchableOpacity>
          </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
      flex : 1,
      fontSize : 50,
      justifyContent : 'center',
      alignItems: 'center',
  },
  title : {
      fontSize : 45,
      textAlign : 'center'
  },
  submitBTN : {
      backgroundColor: 'red',
      flexDirection : 'row',
      height: 35,
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      paddingLeft: 25,
      paddingRight: 25,
      marginTop : 40,
  },
  deckName : {
      width : 300,
      height: 40,
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      marginTop : 40,
  },
})

function mapStateToProps (state){
  return {state}
}

export default connect(mapStateToProps)(NewCard)

