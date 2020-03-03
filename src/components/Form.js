import React from "react";

const Form = ({
  isAdd,
  name,
  status,
  handleInput,
  handleSelect,
  saveForm,
  closeForm
}) => {
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
          value={name || ""}
          onChange={handleInput}
          required
        />
        <label className="is-block" style={{ marginTop: "0.5rem" }}>
          Trạng thái:
        </label>
        <div className="select" style={{ marginTop: "0.2rem", width: "100%" }}>
          <select
            style={{ width: "100%" }}
            value={status || "normal"}
            onChange={handleSelect}
          >
            <option value="normal">Bình Thường</option>
            <option value="important">Quan Trọng</option>
            <option value="else">Kém Quan Trọng</option>
          </select>
        </div>
        <div className="buttons" style={{ marginTop: "1rem" }}>
          <button className="button is-success" onClick={saveForm}>
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
