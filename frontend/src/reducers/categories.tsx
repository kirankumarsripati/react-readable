import { GET_CATEGORIES } from "../actions/categories";
import { ICategory } from "../models/category";

const initialState: ICategory[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.categories];
    default:
      return state;
  }
}