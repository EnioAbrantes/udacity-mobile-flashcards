import { receiveDecks } from './index'
import { getDecksResults } from '../utils/api'

export function handleInitialDecks () {
  return (dispatch) => {

    return getDecksResults()
      .then(( decks ) => {
        dispatch(receiveDecks(Object.values(decks)))
      })
      .catch((error) => console.log(error))
  }
} 