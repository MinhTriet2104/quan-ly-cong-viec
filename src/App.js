import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import SortDropdownButton from "./components/SortDropdownButton";
import Table from "./components/container/Table";
import Form from "./components/Form";

import "./components/styles/App.css";

const data = [
  { id: 1, name: "eat", status: "important" },
  { id: 2, name: "work", status: "normal" },
  { id: 3, name: "sleep", status: "else" }
];

function App() {
  const [isFormActive, setActiveForm] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [items, setItems] = useState(data);
  const [editId, setEditId] = useState(0);
  const [formInputName, setFormInputName] = useState("");
  const [formSelectStatus, setformSelectStatus] = useState("");

  function sortZA() {
    const newItems = items.sort((a, b) => b.name.localeCompare(a.name));
    setItems([...newItems]);
  }

  function sortAZ() {
    const newItems = items.sort((a, b) => a.name.localeCompare(b.name));
    setItems([...newItems]);
  }

  function saveForm() {
    if (isAdd) {
      setItems([
        ...items,
        { id: items.length + 1, name: formInputName, status: formSelectStatus }
      ]);
    } else {
      const item = items.find(item => item.id === editId);
      const index = items.indexOf(item);
      item.name = formInputName;
      item.status = formSelectStatus;
      setItems([...items.slice(0, index), item, ...items.slice(index + 1)]);
    }
    clearForm();
  }

  function deleteItem(id) {
    const item = items.find(item => item.id === id);
    const index = items.indexOf(item);
    const arr = items;
    arr.splice(index, 1);
    setItems([...arr]);
  }

  function handleInput(event) {
    setFormInputName(event.target.value);
  }

  function handleSelect(event) {
    setformSelectStatus(event.target.value);
  }

  function clearForm() {
    setFormInputName("");
    setformSelectStatus("");
  }

  function openAddForm() {
    setActiveForm(true);
    setIsAdd(true);
    clearForm();
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
        <h1 className="has-text-centered is-size-3 has-text-weight-semibold is-marginless">
          Quản Lý Công Việc
        </h1>
        <hr />
        <div className="columns">
          <div
            className={
              "column is-4 " + (!isFormActive && "w0 is-paddingless is-hidden")
            }
          >
            <Form
              isAdd={isAdd}
              name={formInputName}
              status={formSelectStatus}
              closeForm={() => setActiveForm(false)}
              saveForm={saveForm}
              handleInput={handleInput}
              handleSelect={handleSelect}
            />
          </div>
          <div className={isFormActive ? "column is-8" : "column is-12"}>
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
                <SortDropdownButton sortAZ={sortAZ} sortZA={sortZA} />
              </div>
            </div>

            <Table
              items={items}
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
