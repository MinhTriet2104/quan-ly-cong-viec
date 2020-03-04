import React from "react";

const FilterButton = ({ filterOption, filterSelect }) => {
  return (
    <div className="select">
      <select
        style={{ width: "100%" }}
        value={filterOption || "all"}
        onChange={filterSelect}
      >
        <option value="all">Tất Cả</option>
        <option value="important">Quan Trọng</option>
        <option value="normal">Bình Thường</option>
        <option value="else">Kém Quan Trọng</option>
      </select>
    </div>
  );
};

export default FilterButton;
