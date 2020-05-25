import * as API from '../services/api';

export const GET_POSTS = 'GET_POSTS';

export function getPosts(category: string = '') {
  return (dispatch: any) => {
    return API.getPosts(category)
      .then((posts) => dispatch({
        type: GET_POSTS,
        category,
        posts
      }))
  }
}
