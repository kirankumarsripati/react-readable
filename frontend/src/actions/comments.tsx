import * as API from '../services/api'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const getComments = (postId) => (dispatch) =>
  API.getComments(postId)
    .then(comments => dispatch({
        type: GET_COMMENTS,
        comments,
        postId
      }))

export const addComment = ({ postId, author, body }) => (dispatch) =>
  API.addComment({ postId, author, body })
    .then(comment => dispatch({
      type: ADD_COMMENT,
      comment,
      postId
    }))

export const updateComment = ({ commentId, body }) => (dispatch) =>
  API.updateComment({ commentId, body })
    .then(comment => dispatch({
        type: UPDATE_COMMENT,
        comment
      })
    );

export const voteComment = ({ commentId, delta }) => (dispatch) =>
  API.voteComment({ commentId, delta })
    .then(comment => dispatch({
      type: UPDATE_COMMENT,
      comment
    })
  );

export const deleteComment = (commentId) => (dispatch) =>
  API.deleteComment(commentId)
    .then(comment => dispatch({
      type: DELETE_COMMENT,
      comment
    })
  );