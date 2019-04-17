export const ADD_DECK = 'ADD_DECK'

export function addDeck (newDeck) {
    return {
      type: ADD_DECK,
      newDeck,
    }
  } 