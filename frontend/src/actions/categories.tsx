import * as API from '../services/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories() {
  return (dispatch: any) => {
    return API.getCategories()
      .then(({categories}) => dispatch({
        type: GET_CATEGORIES,
        categories,
      }))
  }
}
