import { GET_POSTS } from '../actions/posts';
import { IPost } from '../models/posts';

const initialState: IPost[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    default:
      return state;
  }
}