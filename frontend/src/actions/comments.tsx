import * as API from '../services/api'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const getComments = (postId: string) => (dispatch: Function) =>
  API.getComments(postId)
    .then(comments => dispatch({
        type: GET_COMMENTS,
        comments,
        postId
      }))

export const addComment = (postId: string, author: string = '', body: string = '') => (dispatch: Function) =>
  API.addComment(postId, author, body)
    .then(comment => dispatch({
      type: ADD_COMMENT,
      comment,
      postId
    }))

export const updateComment = (id: string | null, body: string) => (dispatch: Function) =>
  API.updateComment(id, body)
    .then(comment => dispatch({
        type: UPDATE_COMMENT,
        comment
      })
    );

export const voteComment = (id: string, delta: number) => (dispatch: Function) =>
  API.voteComment(id, delta)
    .then(comment => dispatch({
      type: UPDATE_COMMENT,
      comment
    })
  );

export const deleteComment = (commentId: string) => (dispatch: Function) =>
  API.deleteComment(commentId)
    .then(comment => dispatch({
      type: DELETE_COMMENT,
      comment
    })
  );