import { combineReducers } from "redux";
import tasks from "./tasks";
import form from "./form";
import filter from "./filter";

const reducer = combineReducers({
  tasks,
  form,
  filter
});

export default reducer;
