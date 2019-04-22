import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { handleInitialDecks } from '../actions/shared'
import DeckDetails from './DeckDetails'
import { connect } from 'react-redux'

class Decks extends React.Component {

    state = {
        decks : []
    }

  componentDidMount () {
    console.log('before')
    /* getDecksResults().then((data) => this.setState({ decks : Object.values(data)}))
    getDecksResults().then((data) => console.log(Object.values(data)))
    
    if(this.state.decks){
        
    }
    console.log('decks' + this.state.decks) */

    this.props.dispatch(handleInitialDecks())
    //console.log()

    /* {Object.keys(metaInfo).map((key) => {
        const { getIcon, type, ...rest } = metaInfo[key]
        const value = this.state[key]

        return (
          <View key={key} style={styles.row}>
            {getIcon()}
            {type === 'slider'
              ? <UdaciSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              : <UdaciSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />}
          </View>
        )
      })} */

  }

  handleDeck = () =>{

  }

  render() {
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





