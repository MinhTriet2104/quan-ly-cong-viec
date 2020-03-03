import React from "react";
import styled from "styled-components";

const ButtonOption = styled.div`
  border: 0;

  &:hover {
    background: #ddd;
  }
`;

export default ({ sortAZ, sortZA }) => (
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
        <ButtonOption className="dropdown-item" onClick={sortAZ}>
          A - Z
        </ButtonOption>
        <ButtonOption className="dropdown-item" onClick={sortZA}>
          Z - A
        </ButtonOption>
      </div>
    </div>
  </div>
);
