import * as types from "../constants/ActionTypes";

const initialState = {
  status: "all",
  keyword: ""
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filter;
