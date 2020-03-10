import React from "react";
import { useSelector } from "react-redux";

import TableItem from "../TableItem";

const Table = ({ filter, handleDelete, handleEdit }) => {
  const items = useSelector(state => state.tasks);
  let renderItems;
  if (filter === "all") {
    renderItems = items;
  } else {
    renderItems = items.filter(item => item.status === filter);
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
          <TableItem
            key={item.id}
            stt={stt + 1}
            name={item.name}
            status={item.status}
            handleEdit={() => handleEdit(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
