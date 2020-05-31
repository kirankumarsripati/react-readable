import { GET_POSTS } from '../actions/posts';
import { IPost } from '../models/posts';
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/post';

const initialState: IPost[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.post];
    case UPDATE_POST:
      return state.map( p => p.id !== action.post.id ? p : action.post )
    case DELETE_POST:
      return state.filter( p => p.id !== action.post.id );
    default:
      return state;
  }
}