import React from "react";
import { useSelector } from "react-redux";

import TableItem from "../TableItem";

const Table = () => {
  const items = useSelector(state => state.tasks);
  const { status, keyword } = useSelector(state => state.filter);

  let renderItems;
  if (status === "all") {
    renderItems = items;
  } else {
    renderItems = items.filter(item => item.status === status);
  }
  if (keyword !== "") {
    renderItems = renderItems.filter(item => item.name.includes(keyword));
  }

  return (
    <table className="table is-bordered" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="has-text-centered" style={{ width: "10%" }}>
            STT
          </th>
          <th className="has-text-centered" style={{ width: "40%" }}>
            Tên
          </th>
          <th className="has-text-centered" style={{ width: "25%" }}>
            Trạng Thái
          </th>
          <th className="has-text-centered" style={{ width: "25%" }}>
            Hành Động
          </th>
        </tr>
      </thead>
      <tbody>
        {renderItems.map((item, stt) => (
          <TableItem key={stt} stt={stt + 1} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
