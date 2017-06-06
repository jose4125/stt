import { createSelector } from 'reselect'

const selectCategories = (state) => state.get('categories')

const makeSelectAllCategories = () => createSelector(
  selectCategories,
  (categoriesState) => categoriesState.get('allCategories')
)

export {
  makeSelectAllCategories,
}
