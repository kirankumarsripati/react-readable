export const SET_SORT_ORDER = 'SET_SORT_ORDER';

export const setSortOrder = (order: string) => (dispatch: Function) => {
  dispatch({
    type: SET_SORT_ORDER,
    order,
  })
}