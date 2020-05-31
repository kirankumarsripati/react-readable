import { SET_SORT_ORDER } from "../actions/sortOrder";

const initialState = '';

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SORT_ORDER: {
      return action.order;
    }
    default: {
      return state;
    }
  }
};
