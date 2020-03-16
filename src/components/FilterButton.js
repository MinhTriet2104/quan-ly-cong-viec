import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../actions";

const FilterButton = () => {
  const { status } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function handleSelect(event) {
    dispatch(changeStatus(event.target.value));
  }

  return (
    <div className="select">
      <select style={{ width: "100%" }} value={status} onChange={handleSelect}>
        <option value="all">Tất Cả</option>
        <option value="important">Quan Trọng</option>
        <option value="normal">Bình Thường</option>
        <option value="else">Kém Quan Trọng</option>
      </select>
    </div>
  );
};

export default FilterButton;
