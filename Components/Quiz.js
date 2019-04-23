import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { gray, red, green, white, black } from '../utils/colors'
import { Ionicons, Entypo } from '@expo/vector-icons'

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        showAnswer: false,
        grade : 0,
    }

    handleQuestion = (answer) => {
        if((answer && this.props.navigation.state.params.deck.questions[this.state.currentQuestion].answer === 'yes') 
            || (!answer && this.props.navigation.state.params.deck.questions[this.state.currentQuestion].answer === 'no')){
                this.setState({grade : this.state.grade+1})
        }
        this.setState({currentQuestion : this.state.currentQuestion+1})
    }

    handleShowAnswer = () => (
        this.setState({showAnswer : !this.state.showAnswer})
    ) 

    quizPercentage = () => {
        let percentage = ((this.state.grade/this.props.navigation.state.params.deck.questions.length)*100).toFixed(2)

        if (percentage < 40){
            return `Your percentage was ${percentage}%, practice more and you'll be an expert!`
        }else if (percentage >= 40 && percentage < 70){
            return `Your percentage was ${percentage}%. You can do more! Let's play again!`
        }else if (percentage >= 70 && percentage < 100){
            return `Great job! Your percentage was ${percentage}%.`
        }else{
            return `Congratulations! Your percentage was ${percentage}%, you are the best!`
        }
    }

    handleBackButton = () => (
        this.props.navigation.navigate(
            'DeckDetails',
            { deck: this.props.navigation.state.params.deck }
          )
    )

    handleRefreshButton = () => (
        this.setState({
            currentQuestion : 0,
            grade : 0,
        })
    )


    render(){
        let { deck } = this.props.navigation.state.params
        return (
            <View>
                {deck.questions.length <= this.state.currentQuestion
                
                ? <View>
                    <Text style={styles.quizResult}>
                        {this.quizPercentage()}
                    </Text>
                    <View style={styles.showIcons}>
                        <Entypo name='back' size={50} onPress={() => this.handleBackButton()}/>
                        <Ionicons name='md-refresh' size={50} onPress={() => this.handleRefreshButton()}/>
                    </View>
                  </View>
                
                :<View>
                    <Text style={styles.indexText}>{`${this.state.currentQuestion+1}/${deck.questions.length}`}</Text>
                    <View style={styles.container}>
                        <Text style={styles.question}>
                            {this.state.showAnswer
                            ?deck.questions[this.state.currentQuestion].answer
                            :deck.questions[this.state.currentQuestion].question}
                        </Text>
                        <TouchableOpacity onPress={() => this.handleShowAnswer()}>
                            <Text style={styles.showAnswerText} >
                            {this.state.showAnswer
                            ? 'Question' 
                            : 'Answer'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.correctBTN} onPress={() => this.handleQuestion(true)}>
                            <Text style={styles.correctText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.incorrectBTN} onPress={() => this.handleQuestion(false)}>
                            <Text style={styles.incorrectText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
            
          )
    }
    
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems: 'center',
    },
    question : {
        fontSize : 45,
        textAlign : 'center',
        color : black,
        marginTop : 60,
    },
    showAnswerText : {
        color : red,
        fontSize : 15,
        marginTop : 8,
    },
    correctBTN : {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 50,
        marginTop: 150,
        width : 250,
    },
    correctText : {
        color : white,
        textAlign: 'center',
        fontSize: 22,
    },
    incorrectBTN : {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 50,
        marginTop: 10,
        width : 250,
    },
    incorrectText : {
        color : white,
        textAlign: 'center',
        fontSize: 22,
    },
    indexText : {
        color : black,
        fontSize: 18,
        marginTop : 10,
        marginLeft : 10,
    },
    quizResult : {
        fontSize : 50,
        textAlign : 'center',
        color : black,
        marginTop : 60,
    },
    showIcons : {
        marginTop : 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
  })

export default Quiz