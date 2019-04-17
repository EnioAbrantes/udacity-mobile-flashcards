import { ADD_DECK, RECEIVE_DECKS } from '../actions/index'


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
        default:
            return state
    }
}
export default entries