import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { submitDeckEntry, getDecksResults } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
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


        submitDeckEntry(key)
        console.log(key)
        getDecksResults().then((data) => console.log(data))
        this.props.dispatch(addDeck({[key] : {
            title : key,
            questions : []
        } }))

        clearLocalNotification().then(setLocalNotification)
        
        //console.log(getDecksResults())
    }


  render() {

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                style={styles.deckName}
                placeholder="Deck Title"
                onChangeText={(text) => this.handleInput(text)}
            />
            <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleSubmit()}>
                <Text >Submit</Text>
            </TouchableOpacity>
        </View>
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

export default connect(mapStateToProps)(NewDeck)