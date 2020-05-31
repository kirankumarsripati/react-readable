import * as API from '../services/api';
import { IPost } from '../models/posts';

export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const getPost = (id: string) => (dispatch: Function) =>
  API.getPost(id)
    .then((post: IPost) => dispatch({
      type: GET_POST,
      post,
    }));

export const addPost = ({ author, title, category, body }: Partial<IPost>) => (dispatch: Function) =>
  API.addPost({ author, title, category, body })
    .then(post => dispatch({
      type: ADD_POST,
      post
    }));

export const updatePost = ({ id, title, body }: Partial<IPost>) => (dispatch: Function) =>
  API.updatePost({ id, title, body })
    .then(post => dispatch({
      type: UPDATE_POST,
      post
    }))

export const votePost = (id: string, delta: number) => (dispatch: Function) =>
  API.votePost(id, delta)
    .then(post => dispatch({
      type: UPDATE_POST,
      post
    }))

export const deletePost = (id: string) => (dispatch: Function) =>
  API.deletePost(id).then(post => dispatch({
    type: DELETE_POST,
    post
  }))
