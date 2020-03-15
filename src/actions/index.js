import * as types from "../constants/ActionTypes";

export const getItems = () => ({
  type: types.GET_ITEMS
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  item
});

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  id
});

export const editItem = item => ({
  type: types.EDIT_ITEM,
  item
});

export const sortAZ = () => ({
  type: types.SORT_A_TO_Z
});

export const sortZA = () => ({
  type: types.SORT_Z_TO_A
});

export const handleInput = value => ({
  type: types.HANDLE_INPUT,
  value
});

export const handleSelect = value => ({
  type: types.HANDLE_SELECT,
  value
});

export const handleKeyword = value => ({
  type: types.HANDLE_KEYWORD,
  value
});

export const clearForm = () => ({
  type: types.CLEAR_FORM
});

export const openAddForm = () => ({
  type: types.OPEN_ADD_FORM
});

export const openEditForm = item => ({
  type: types.OPEN_EDIT_FORM,
  item
});

export const closeForm = () => ({
  type: types.CLOSE_FORM
});

export const filterWithKeyWord = keyword => ({
  type: types.FILTER_WITH_KEYWORD,
  keyword
});
