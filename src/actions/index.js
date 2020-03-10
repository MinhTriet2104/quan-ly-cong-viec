import * as types from "../constants/ActionTypes";

export const getItems = () => {
  return {
    type: types.GET_ITEMS
  };
};

export const addItem = item => {
  return {
    type: types.ADD_ITEM,
    item
  };
};
