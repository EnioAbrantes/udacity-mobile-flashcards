import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { submitDeckEntry, getDecksResults } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { white, black, gray } from '../utils/colors'
import { clearLocalNotification , setLocalNotification } from '../utils/helpers'

class NewDeck extends React.Component {

    state = {
        deckTitle : '',
    }

    handleInput = (deckTitle) => {
        console.log('input'+deckTitle)
        this.setState({deckTitle : deckTitle})
    }


    handleSubmit = () => {
        const key = this.state.deckTitle
        this.setState({deckTitle : ''})

        let deck = submitDeckEntry(key)
        console.log(key)
        getDecksResults().then((data) => data)
        this.props.dispatch(addDeck({[key] : {
            title : key,
            questions : []
        } }))

        clearLocalNotification().then(setLocalNotification)
        
        

        this.props.navigation.navigate(
            'DeckDetails',
            { deck: {
                title : key,
                questions : []
            }}
        )

    }


  render() {

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                style={styles.deckName}
                placeholder="Type the Deck Title"
                onChangeText={(text) => this.handleInput(text)}
                value= {this.state.deckTitle}
            />
            <TouchableOpacity style={styles.addDeckBtn} onPress={() => this.handleSubmit()}>
                <Text style={styles.addDeckText} >Add Deck</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
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
        fontSize : 50,
        color : gray,
        textAlign : 'center'
    },
    deckName : {
        width : 300,
        height: 40,
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        marginTop : 40,
    },
    addDeckBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 50,
        marginTop: 50,
        width : 150,
      },
    addDeckText: {
        color : white,
        textAlign: 'center',
        fontSize: 22,
    },
})


/* const styles = StyleSheet.create({
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
   */

function mapStateToProps (state){
    return {state}
}

export default connect(mapStateToProps)(NewDeck)