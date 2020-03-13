import * as types from "../constants/ActionTypes";

let id =
  localStorage.getItem("id") !== "undefined" &&
  localStorage.getItem("id") !== null
    ? ~~localStorage.getItem("id")
    : 1;

const data =
  localStorage.getItem("items") !== "undefined" &&
  localStorage.getItem("items") !== null
    ? JSON.parse(localStorage.getItem("items"))
    : [];

const initialState = [...data];

function saveData(rawData) {
  const data = JSON.stringify(rawData);
  localStorage.setItem("items", data);
}

let newState = [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const { name, status } = action.item;
      newState = [
        ...state,
        {
          id: id++,
          name: name,
          status: status
        }
      ];
      saveData(newState);
      return newState;
    case types.DELETE_ITEM:
      const findItem = state.find(item => item.id === action.id);
      const index = state.indexOf(findItem);
      newState = [...state.slice(0, index), ...state.slice(index + 1)];
      saveData(newState);
      return newState;
    case types.GET_ITEMS:
    default:
      return state;
  }
};

export default tasks;
