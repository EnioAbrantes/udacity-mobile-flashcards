import { ADD_DECK } from '../actions/index'


function entries(state = {}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                ...action.newDeck
            }
        default:
            return state
    }
}
export default entries