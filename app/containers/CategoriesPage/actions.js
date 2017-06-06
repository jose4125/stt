import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  RESPONSE_FETCH_CATEGORIES,
  SYNC_CATEGORIES,
  SYNC_CATEGORIES_ADDED,
} from './constants'

export function createCategory() {
  return {
    type: CREATE_CATEGORY,
  }
}

export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES,
  }
}

export function responseFetchCategories(categories) {
  return {
    type: RESPONSE_FETCH_CATEGORIES,
    categories,
  }
}

export function syncCategory() {
  return {
    type: SYNC_CATEGORIES,
  }
}

export function responseCategoriesAdded(categories) {
  return {
    type: SYNC_CATEGORIES_ADDED,
    categories: categories.value,
  }
}
