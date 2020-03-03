import React from "react";

const Form = ({ closeForm }) => {
  return (
    <div className="message is-warning">
      <div className="message-header">
        <p>Thêm Công Việc</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={closeForm}
        ></button>
      </div>
      <div className="message-body">
        <label className="is-block">Tên: </label>
        <input className="input" type="text" />
        <label className="is-block" style={{ marginTop: "0.5rem" }}>
          Trạng thái:
        </label>
        <input className="input" type="text" />
        <div className="buttons" style={{ marginTop: "1rem" }}>
          <button class="button is-success">
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>Lưu lại</span>
          </button>
          <button class="button is-danger is-outlined" onClick={closeForm}>
            <span>Hủy bỏ</span>
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
