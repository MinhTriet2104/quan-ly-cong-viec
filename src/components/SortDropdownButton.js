import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sortAZ, sortZA } from "../actions/index";

const ButtonOption = styled.div`
  border: 0;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

export default () => {
  const dispatch = useDispatch();

  function clickSortAZ() {
    dispatch(sortAZ());
  }

  function clickSortZA() {
    dispatch(sortZA());
  }

  return (
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
          <ButtonOption className="dropdown-item" onClick={clickSortAZ}>
            A - Z
          </ButtonOption>
          <ButtonOption className="dropdown-item" onClick={clickSortZA}>
            Z - A
          </ButtonOption>
        </div>
      </div>
    </div>
  );
};
