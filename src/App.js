import React, { useState, useEffect } from "react";
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

  const [isFormActive, setActiveForm] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(0);
  const [formInputName, setFormInputName] = useState("");
  const [formSelectStatus, setformSelectStatus] = useState("normal");
  const [keyword, setKeyword] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    getData();
  }, []);

  let id =
    localStorage.getItem("id") !== "undefined" &&
    localStorage.getItem("id") !== null
      ? ~~localStorage.getItem("id")
      : 1;

  async function getData() {
    const data =
      localStorage.getItem("items") !== "undefined" &&
      localStorage.getItem("items") !== null
        ? await JSON.parse(localStorage.getItem("items"))
        : [];
    setItems([...data]);
  }

  function saveData(rawData) {
    const data = JSON.stringify(rawData);
    localStorage.setItem("items", data);
  }

  function findItem(event) {
    const currentKeyword = event.target.value;
    setKeyword(currentKeyword);
    if (!currentKeyword) {
      getData();
    } else {
      const findItems = items.filter(item =>
        item.name.includes(currentKeyword)
      );
      setItems([...findItems]);
    }
  }

  function sortZA() {
    const newItems = items.sort((a, b) => b.name.localeCompare(a.name));
    setItems([...newItems]);
    saveData([...newItems]);
  }

  function sortAZ() {
    const newItems = items.sort((a, b) => a.name.localeCompare(b.name));
    setItems([...newItems]);
    saveData([...newItems]);
  }

  function deleteItem(id) {
    const item = items.find(item => item.id === id);
    const index = items.indexOf(item);
    const arr = items;
    arr.splice(index, 1);
    setItems([...arr]);
    saveData([...arr]);
  }

  function openAddForm() {
    dispatch(actions.openAddForm());
  }

  function openEditForm(id) {
    setActiveForm(true);
    setIsAdd(false);
    setEditId(id);
    setFormInputName(items.find(item => item.id === id).name);
    setformSelectStatus(items.find(item => item.id === id).status);
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
                <SearchBar keyword={keyword} findItem={findItem} />
              </div>
              <div className="column">
                <SortDropdownButton sortAZ={sortAZ} sortZA={sortZA} />{" "}
                <FilterButton
                  filterOption={filterOption}
                  filterSelect={event => setFilterOption(event.target.value)}
                />
              </div>
            </div>

            <Table
              filter={filterOption}
              handleEdit={openEditForm}
              handleDelete={deleteItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
