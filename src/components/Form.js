import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../actions/index";

const Form = ({ isAdd, closeForm }) => {
  const [formInputName, setFormInputName] = useState("");
  const [formSelectStatus, setformSelectStatus] = useState("normal");

  const dispatch = useDispatch();

  function handleInput(event) {
    setFormInputName(event.target.value);
  }

  function handleSelect(event) {
    setformSelectStatus(event.target.value);
  }

  function clearForm() {
    setFormInputName("");
    setformSelectStatus("normal");
  }

  function addItem() {
    dispatch(
      actions.addItem({
        name: formInputName,
        status: formSelectStatus
      })
    );
    clearForm();
  }

  return (
    <div className="message is-warning">
      <div className="message-header">
        <p>{isAdd ? "Thêm Công Việc" : "Sửa Công Việc"}</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={closeForm}
        ></button>
      </div>
      <div className="message-body">
        <label className="is-block">Tên: </label>
        <input
          className="input"
          type="text"
          value={formInputName}
          onChange={handleInput}
          required
        />
        <label className="is-block" style={{ marginTop: "0.5rem" }}>
          Trạng thái:
        </label>
        <div className="select" style={{ marginTop: "0.2rem", width: "100%" }}>
          <select
            style={{ width: "100%" }}
            value={formSelectStatus}
            onChange={handleSelect}
          >
            <option value="normal">Bình Thường</option>
            <option value="important">Quan Trọng</option>
            <option value="else">Kém Quan Trọng</option>
          </select>
        </div>
        <div className="buttons" style={{ marginTop: "1rem" }}>
          <button className="button is-success" onClick={addItem}>
            <span className="icon is-small">
              <i className="fas fa-check"></i>
            </span>
            <span>Lưu lại</span>
          </button>
          <button className="button is-danger is-outlined" onClick={closeForm}>
            <span className="icon is-small">
              <i className="fas fa-times"></i>
            </span>
            <span>Hủy bỏ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
