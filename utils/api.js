import { AsyncStorage } from 'react-native'
import { formatDecksInfo } from './helpers'

export const DECKS_LIST_KEY = 'FlashCards:decks'

export function getDecksResults () {
  return AsyncStorage.getItem(DECKS_LIST_KEY)
  .then((data) => JSON.parse(data))
}

//following the format on the documentation
export function submitDeckEntry ( key ) {
    console.log(key)
    //AsyncStorage.clear()
    return AsyncStorage.mergeItem(DECKS_LIST_KEY, JSON.stringify({
      [key] : {
          title : key,
          questions : []
      } 
    }))
  }
  
export function submitCardEntry ( key, newCard ) {
    return AsyncStorage.getItem(DECKS_LIST_KEY)
  .then((data) => {
      let deckInfo = JSON.parse(data)[key]
      deckInfo.questions.push(newCard)
      AsyncStorage.setItem(DECKS_LIST_KEY, JSON.stringify({[key]: deckInfo}))
      .then(data => JSON.parse(data))
    })
  }