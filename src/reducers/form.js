import * as types from "../constants/ActionTypes";

const initialState = {
  inputName: "",
  selectStatus: "normal",
  editId: -1,
  isOpen: false,
  isAdd: true
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT:
      return {
        ...state,
        inputName: action.value
      };
    case types.HANDLE_SELECT:
      return {
        ...state,
        selectStatus: action.value
      };
    case types.CLEAR_FORM:
      return {
        ...state,
        inputName: "",
        selectStatus: "normal"
      };
    case types.OPEN_ADD_FORM:
      return {
        ...state,
        isAdd: true,
        isOpen: true
      };
    case types.OPEN_EDIT_FORM:
      const { id, name, status } = action.item;
      return {
        inputName: name,
        selectStatus: status,
        editId: id,
        isAdd: false,
        isOpen: true
      };
    case types.CLOSE_FORM:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default form;
