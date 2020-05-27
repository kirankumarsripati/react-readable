import * as API from '../services/api';
import { IPost } from '../models/posts';

export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const getPost = (id: string) => (dispatch) =>
  API.getPost(id)
    .then((post: IPost) => dispatch({
      type: GET_POST,
      post,
    }));

export const addPost = ({ author, title, category, body }) => (dispatch) =>
  API.addPost({ author, title, category, body})
    .then(post => dispatch({
      type: ADD_POST,
      post
    }));

export const updatePost = ({ postId, title, body }) => (dispatch) =>
  API.updatePost({ postId, title, body })
    .then(post => dispatch({
      type: UPDATE_POST,
      post
    }))

export const votePost = ({ postId, delta }) => (dispatch) =>
  API.votePost({ postId, delta })
    .then(post => dispatch({
      type: UPDATE_POST,
      post
    }))

export const deletePost = (postId) => (dispatch) =>
  API.deletePost(postId).then(post => dispatch({
    type: DELETE_POST,
    post
  }))
