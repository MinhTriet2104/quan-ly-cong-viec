import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import searchBar from "./searchBar";
import filter from "./filter";

const reducer = combineReducers({
  tasks,
  form,
  searchBar,
  filter
});

export default reducer;
