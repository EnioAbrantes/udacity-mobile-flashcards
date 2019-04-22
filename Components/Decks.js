import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { handleInitialDecks } from '../actions/shared'
import DeckDetails from './DeckDetails'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'

class Decks extends React.Component {

    state = {
        decks : [],
        ready : false
    }

  componentDidMount () {
    this.props.dispatch(handleInitialDecks())
    .then(() => this.setState(() => ({ready: true})))
  }

  render() {
    const { ready } = this.state

    if (ready === false) {
        return <AppLoading />
    }
    
    return (
      <ScrollView  style={styles.container}>
        <View style={{marginTop : 40}}/>
        { Object.values(this.props.decks).length === 0
        ? <Text style={styles.noDeckMessage}> There is no deck yet, create your first deck and let's start the game.</Text>
        : Object.values(this.props.decks).map((deck) => {
                return (
                    <TouchableOpacity key={`${deck.title}btn`} onPress={() => this.props.navigation.navigate(
                        'DeckDetails',
                        { deck: deck }
                    )}> 
                        <View key={`${deck.title}hrup`} style={styles.hr}/>
                        <View key={deck.title} >
                            <Text style={styles.deck}>{deck.title}</Text>
                            <Text style={styles.cards}>{deck.questions.length} cards</Text>
                        </View>
                        <View key={`${deck.title}hrdown`} style={styles.hr} />
                    </TouchableOpacity>
                )
        })  
        }
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deck : { 
        fontSize : 50,
        textAlign : 'center',
    },
    cards : {
        fontSize : 20,
        textAlign : 'center',
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'stretch',
        marginTop : 10,
    },
    noDeckMessage : {
        marginTop : 50,
        fontSize : 50,
        textAlign : 'center',
    }
})

function mapStateToProps ( state ){
    JSON.stringify( state )
    return { decks : state }
}

export default connect(mapStateToProps)(Decks)





