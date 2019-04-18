import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions/index'


function entries(state = {}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                ...action.newDeck
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD:
            return Object.values(state).map((deck) => (
                    deck.title === action.deck.title? action.deck : deck
            ))
        default:
            return state
    }
}
export default entries