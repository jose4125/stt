import { takeLatest, takeEvery, select, put, call, fork } from 'redux-saga/effects'
// import { database } from 'utils/firebase'
import { makeSelectFormValues } from 'containers/CategoriesPage/selectors'
import { responseFetchCategories, responseCategoriesAdded } from 'containers/CategoriesPage/actions'
import { getAll, create, sync, VALUE } from 'firebase-saga'

import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  SYNC_CATEGORIES,
} from './constants'

// const databaseRef = database.ref('categories')

export function* createCategory() {
  const categoryData = yield select(makeSelectFormValues())
  try {
    // databaseRef.push(categoryData)
    yield call(create, 'categories', () => ({ [`categories/${categoryData.code}`]: categoryData }))
  } catch (error) {
    throw new Error(error)
  }
}

export function* postCategories() {
  yield takeLatest(CREATE_CATEGORY, createCategory)
}

export function* getCategories() {
  try {
    const data = yield call(getAll, 'categories')
    yield put(responseFetchCategories(data))
  } catch (error) {
    throw new Error(error)
  }
}

export function* fetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, getCategories)
}

export function* syncCategoriesAdded() {
  yield fork(sync, 'categories', {
    [VALUE]: responseCategoriesAdded,
    //[CHILD_REMOVED]: actions.syncPostRemoved,
  })
}

export function* syncCategories() {
  yield takeEvery(SYNC_CATEGORIES, syncCategoriesAdded)
}

export default [
  postCategories,
  fetchCategories,
  syncCategories,
]
