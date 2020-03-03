import React from "react";

export default () => (
  <div className="is-flex">
    <p
      class="control has-icons-left"
      style={{
        width: "100%"
      }}
    >
      <input
        class="input"
        type="text"
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        }}
      />
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </p>
    <button
      class="button is-primary"
      style={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}
    >
      Tìm kiếm
    </button>
  </div>
);
