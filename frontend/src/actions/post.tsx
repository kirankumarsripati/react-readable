import * as API from '../services/api';
import { IPost } from '../models/posts';
export const GET_POST = 'GET_POST';

export const getPost = (id: string) => (dispatch) =>
  API.getPost(id)
    .then((post: IPost) => dispatch({
      type: GET_POST,
      post,
    }));
