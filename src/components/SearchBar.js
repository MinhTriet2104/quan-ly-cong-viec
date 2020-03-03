import React from "react";

export default () => (
  <div className="is-flex">
    <p
      className="control has-icons-left"
      style={{
        width: "100%"
      }}
    >
      <input
        className="input"
        type="text"
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </p>
    <button
      className="button is-primary"
      style={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}
    >
      Tìm kiếm
    </button>
  </div>
);
