import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { purple, white, red, green, black } from '../utils/colors'
import { submitCardEntry } from '../utils/api'
import { addCard } from '../actions/index'
import { connect } from 'react-redux'
import SwitchSelector from "react-native-switch-selector";
import { MaterialIcons } from "@expo/vector-icons";


class NewCard extends Component {

  state = {
    question : '',
    answer : 'no'
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

    this.props.navigation.navigate(
      'DeckDetails',
      { deck: this.props.navigation.state.params.deck }
    )

}

  render(){
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}> 
              <TextInput
                  style={styles.cardQuestion}
                  placeholder={'Type your question'}
                  onChangeText={(question) => this.handleQuestion(question)}
              />
              <SwitchSelector
                  style={styles.switch}
                  initial={0}
                  onPress={value => this.setState({ answer: value })}
                  textColor={purple} //'#7a44cf'
                  selectedColor={white}
                  buttonColor={this.state.answer === 'yes' ? green : red}
                  borderColor={purple} 
                  hasPadding
                  options={[
                    { label: "no", value: "no" },
                    { label: "yes", value: "yes" } 
                  ]}
              />

              <TouchableOpacity style={styles.addCardBtn} onPress={() => this.handleAddCard()} >
                  <Text style={styles.addCardText}>Add Card</Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>
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
  cardQuestion : {
      width : 300,
      height: 40,
      borderWidth: 2,
      borderRadius: 3,
      padding: 5,
      marginTop : 40,
  },
  switch : {
    width : 300,
    marginTop: 20,
  },
  addCardBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginTop: 50,
    width : 150,
  },
  addCardText: {
    color : white,
    textAlign: 'center',
    fontSize: 22,
  },
})

function mapStateToProps (state){
  return {state}
}

export default connect(mapStateToProps)(NewCard)

