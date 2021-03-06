import * as API from '../services/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () => (dispatch: Function) =>
  API.getCategories()
    .then(({categories}) => dispatch({
        type: GET_CATEGORIES,
        categories,
      }))