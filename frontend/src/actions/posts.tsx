import * as API from '../services/api';

export const GET_POSTS = 'GET_POSTS';

export const getPosts = (category: string = '') => (dispatch: Function) =>
  API.getPosts(category)
    .then((posts) => dispatch({
        type: GET_POSTS,
        category,
        posts
      }))
