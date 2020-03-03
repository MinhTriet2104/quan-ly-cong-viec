import React from "react";

export default () => (
  <div className="dropdown is-hoverable">
    <div className="dropdown-trigger">
      <button
        className="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span>Sắp xếp</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
      <div className="dropdown-content">
        <a href="/" className="dropdown-item">
          A - Z
        </a>
        <a href="/" className="dropdown-item">
          Z - A
        </a>
      </div>
    </div>
  </div>
);
