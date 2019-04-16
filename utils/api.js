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
  