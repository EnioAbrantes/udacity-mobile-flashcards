import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

class Quiz extends Component {
    state = {
        currentQuestion: 0
    }

    componentDidMount(){
        //this.setState({currentQuestion : this.props.navigation.state.params.questions[0]})
    }

    handleQuestion = () => (
        this.setState({currentQuestion : this.state.currentQuestion+1})
    ) 

    render(){
        let { questions } = this.props.navigation.state.params
        return (
            <View>
                {this.props.navigation.state.params.questions.length <= this.state.currentQuestion
                
                ? <Text style={{color: purple, fontSize: 25}}>
                    done
                </Text>
                
                :<View>
                    <Text style={{color: purple, fontSize: 25}}>
                        {this.props.navigation.state.params.questions[this.state.currentQuestion].question}
                    </Text>
                    <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleQuestion()}>
                        <Text >Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleQuestion()}>
                        <Text >Incorrect</Text>
                    </TouchableOpacity>
                </View>
                }
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

export default Quiz