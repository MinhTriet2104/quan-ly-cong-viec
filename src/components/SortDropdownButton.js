import React from "react";

export default () => (
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span>Sắp xếp</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
      <div class="dropdown-content">
        <a href="/" class="dropdown-item">
          A - Z
        </a>
        <a href="/" class="dropdown-item">
          Z - A
        </a>
        <hr class="dropdown-divider" />
        <a href="/" class="dropdown-item">
          A - Z
        </a>
        <a href="/" class="dropdown-item">
          Z - A
        </a>
      </div>
    </div>
  </div>
);
