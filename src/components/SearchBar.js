import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeKeyWord } from "../actions/index";

export default () => {
  const { keyword } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function handleInput(event) {
    dispatch(changeKeyWord(event.target.value));
  }

  return (
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
          placeholder="Nhập để tìm kiếm..."
          value={keyword}
          onChange={handleInput}
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
};
