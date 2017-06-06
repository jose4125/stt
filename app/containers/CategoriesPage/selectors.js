import { createSelector } from 'reselect'

const selectForm = (state) => state.get('form')


const makeSelectFormValues = () => createSelector(
  selectForm,
  (formState) => {
    const category = {
      name: formState.getIn(['categoryNew', 'values', 'nombre']) || '',
      code: formState.getIn(['categoryNew', 'values', 'codigo']) || '',
      active: formState.getIn(['categoryNew', 'values', 'activo']) || false,
    }
    return category
  }
)

export {
  makeSelectFormValues,
}
