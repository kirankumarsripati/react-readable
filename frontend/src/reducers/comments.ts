import { GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "../actions/comments";
import { IComment } from "../models/comment";

const initialState: IComment[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [...state, action.comment];
    case UPDATE_COMMENT:
      return state.map( c => c.id !== action.comment.id ? c : action.comment)
    case DELETE_COMMENT:
      return state.filter( c => c.id !== action.comment.id )
    default:
      return state;
  }
}