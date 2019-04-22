import { AsyncStorage } from 'react-native'

export const DECKS_LIST_KEY = 'FlashCards:decks'

export function getDecksResults () {
  //AsyncStorage.clear()
  return AsyncStorage.getItem(DECKS_LIST_KEY)
  .then((data) => JSON.parse(data))
  .catch((error) => console.log(error))
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
      AsyncStorage.mergeItem(DECKS_LIST_KEY, JSON.stringify({
        [key]: deckInfo}
      ))
      .then(data => JSON.parse(data))
      
    })
  }