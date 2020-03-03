import React from "react";

import TableItem from "../TableItem";

const Table = ({ items, handleDelete, handleEdit }) => {
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
        {items.map(item => (
          <TableItem
            key={item.id}
            id={item.id}
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
