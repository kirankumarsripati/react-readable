import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import post from './post';
import comments from './comments';
import sortOrder from './sortOrder'

export default combineReducers({
  categories,
  posts,
  post,
  comments,
  sortOrder,
});