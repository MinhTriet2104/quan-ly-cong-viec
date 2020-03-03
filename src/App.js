import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import SortDropdownButton from "./components/SortDropdownButton";
import Table from "./components/container/Table";
import Form from "./components/Form";

import "./components/styles/App.css";

function App() {
  const [isFormActive, setActiveForm] = useState(false);

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
            <Form closeForm={() => setActiveForm(false)} />
          </div>
          <div className={isFormActive ? "column is-8" : "column is-12"}>
            <button
              class="button is-primary"
              onClick={() => setActiveForm(true)}
            >
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
              <span>Thêm công việc</span>
            </button>

            <div className="columns" style={{ marginTop: "0.5rem" }}>
              <div className="column">
                <SearchBar />
              </div>
              <div className="column">
                <SortDropdownButton />
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
