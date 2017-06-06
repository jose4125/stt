/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true)
 */

import { fromJS } from 'immutable'

import {
  RESPONSE_FETCH_CATEGORIES,
  SYNC_CATEGORIES_ADDED,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  allCategories: {},
})

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case RESPONSE_FETCH_CATEGORIES:
      return state
        .set('allCategories', action.categories)
    case SYNC_CATEGORIES_ADDED:
      return state
        .set('allCategories', action.categories)
    default:
      return state
  }
}

export default categoriesReducer
