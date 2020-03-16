import { CHANGE_KEYWORD, CHANGE_STATUS } from "../constants/ActionTypes";

const initialState = {
  status: "all",
  keyword: ""
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_KEYWORD: {
      return {
        ...state,
        keyword: action.keyword
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

export default filter;
