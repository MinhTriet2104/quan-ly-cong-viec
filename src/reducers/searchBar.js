import * as types from "../constants/ActionTypes";

const initialState = "";

const searchBar = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_KEYWORD:
      return action.value;
    default:
      return state;
  }
};

export default searchBar;
