import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index";

import SearchBar from "./components/SearchBar";
import SortDropdownButton from "./components/SortDropdownButton";
import Table from "./components/container/Table";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

import "./components/styles/App.css";

import TodoListImg from "./img/to-do-list.svg";

function App() {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  function openAddForm() {
    dispatch(actions.openAddForm());
  }

  return (
    <div className="App">
      <div className="container">
        <div
          className="has-text-centered"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2em"
          }}
        >
          <h1 className="is-size-3 has-text-weight-semibold is-marginless">
            Quản Lý Công Việc
          </h1>
          <img
            src={TodoListImg}
            alt="Todo List React"
            width="40px"
            style={{ marginLeft: "0.2em" }}
          />
        </div>
        <hr />
        <div className="columns">
          <div
            className={
              "column is-4 " + (!form.isOpen && "w0 is-paddingless is-hidden")
            }
          >
            <Form />
          </div>
          <div className={form.isOpen ? "column is-8" : "column is-12"}>
            <button className="button is-primary" onClick={openAddForm}>
              <span className="icon is-small">
                <i className="fas fa-plus"></i>
              </span>
              <span>Thêm công việc</span>
            </button>

            <div className="columns" style={{ marginTop: "0.5rem" }}>
              <div className="column">
                <SearchBar />
              </div>
              <div className="column">
                <SortDropdownButton />
                {"  "}
                <FilterButton />
              </div>
            </div>

            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
