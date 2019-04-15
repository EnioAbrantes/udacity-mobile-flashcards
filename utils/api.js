import { AsyncStorage } from 'react-native'
import { formatDecksInfo } from './helpers'

export const DECKS_LIST_KEY = 'FlashCards:deck'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_LIST_KEY)
    .then(formatDecksInfo)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_LIST_KEY, JSON.stringify({
    [key]: entry
  }))
}
