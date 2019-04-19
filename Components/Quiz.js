import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        showAnswer: false,
        grade : 0,
    }

    handleQuestion = (answer) => {
        console.log(this.props.navigation.state.params.questions[this.state.currentQuestion].answer)
        if((answer && this.props.navigation.state.params.questions[this.state.currentQuestion].answer === 'yes') 
            || (!answer && this.props.navigation.state.params.questions[this.state.currentQuestion].answer === 'no')){
                this.setState({grade : this.state.grade+1})
        }
        this.setState({currentQuestion : this.state.currentQuestion+1})
    }

    handleShowAnswer = () => (
        this.setState({showAnswer : !this.state.showAnswer})
    ) 



    render(){
        let { questions } = this.props.navigation.state.params
        return (
            <View>
                {this.props.navigation.state.params.questions.length <= this.state.currentQuestion
                
                ? <Text style={{color: purple, fontSize: 25}}>
                    done, you've finished with the percentage of {((this.state.grade/this.props.navigation.state.params.questions.length)*100).toFixed(2)}%
                </Text>
                
                :<View>
                    <Text >{`${this.state.currentQuestion+1}/${this.props.navigation.state.params.questions.length}`}</Text>
                    <Text style={{color: purple, fontSize: 25}}>
                        {this.state.showAnswer
                        ?this.props.navigation.state.params.questions[this.state.currentQuestion].answer
                        :this.props.navigation.state.params.questions[this.state.currentQuestion].question}
                    </Text>
                    <TouchableOpacity onPress={() => this.handleShowAnswer()}>
                        <Text >{this.state.showAnswer
                        ? 'Question' 
                        : 'Answer'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleQuestion(true)}>
                        <Text >Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBTN} onPress={() => this.handleQuestion(false)}>
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