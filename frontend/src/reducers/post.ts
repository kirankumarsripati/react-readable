import { GET_POST, UPDATE_POST } from '../actions/post';
import { IPost } from '../models/posts';

const initialState: IPost | {} = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST:
      return action.post;
    case UPDATE_POST:
      return action.post;
    default:
      return state;
  }
}