import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { submitEntry, fetchDeckResults } from '../utils/api'
import { uuidv4 } from '../utils/helpers'


export default class NewDeck extends React.Component {

    state = {
        text : '',
    }

    handleInput = (text) => {
        this.setState({text : text})

        const key = uuidv4()
        const entry = this.state

        submitEntry({key, entry})
        
    }


    handleSubmit = () => {
        const key = uuidv4()
        const entry = this.state

        submitEntry({key, entry})
        console.log(entry)
        console.log(key)
        console.log(fetchDeckResults())
    }


  render() {

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                style={styles.deckName}
                placeholder="Deck Title"
                onChangeText={(text) => this.handleInput({text})}
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