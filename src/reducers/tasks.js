import * as types from "../constants/ActionTypes";

let id =
  localStorage.getItem("id") !== "undefined" &&
  localStorage.getItem("id") !== null
    ? ~~localStorage.getItem("id")
    : 1 && localStorage.setItem("id", 1);

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

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const { name, status } = action.item;
      const newState = [
        {
          id: id++,
          name: name,
          status: status
        },
        ...state
      ];
      saveData(newState);
      localStorage.setItem("id", id);
      return newState;
    }
    case types.DELETE_ITEM: {
      const findItem = state.find(item => item.id === action.id);
      const index = state.indexOf(findItem);
      const newState = [...state.slice(0, index), ...state.slice(index + 1)];
      saveData(newState);
      return newState;
    }
    case types.EDIT_ITEM: {
      const { id, name, status } = action.item;
      const findItem = state.find(item => item.id === id);
      const index = state.indexOf(findItem);
      const newState = [
        ...state.slice(0, index),
        { id: id, name: name, status: status },
        ...state.slice(index + 1)
      ];
      saveData(newState);
      return newState;
    }
    case types.SORT_A_TO_Z: {
      const newState = [...state.sort((a, b) => a.name.localeCompare(b.name))];
      saveData(newState);
      return newState;
    }
    case types.SORT_Z_TO_A: {
      const newState = [...state.sort((a, b) => b.name.localeCompare(a.name))];
      saveData(newState);
      return newState;
    }
    case types.SWITCH_STATUS: {
      const { id, name, status } = action.item;
      const findItem = state.find(item => item.id === id);
      const index = state.indexOf(findItem);
      const newStatus =
        status === "normal"
          ? "important"
          : status === "else"
          ? "normal"
          : "else";
      const newState = [
        ...state.slice(0, index),
        { id: id, name: name, status: newStatus },
        ...state.slice(index + 1)
      ];
      saveData(newState);
      return newState;
    }
    case types.GET_ITEMS:
    default:
      return state;
  }
};

export default tasks;
