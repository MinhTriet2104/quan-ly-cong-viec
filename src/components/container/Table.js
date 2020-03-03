import React from "react";

import TableItem from "../TableItem";

const Table = () => {
  return (
    <table className="table is-bordered" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="has-text-centered" style={{ width: "10%" }}>
            STT
          </th>
          <th className="has-text-centered" style={{ width: "50%" }}>
            Tên
          </th>
          <th className="has-text-centered" style={{ width: "20%" }}>
            Trạng Thái
          </th>
          <th className="has-text-centered" style={{ width: "20%" }}>
            Hành Động
          </th>
        </tr>
      </thead>
      <tbody>
        <TableItem />
      </tbody>
    </table>
  );
};

export default Table;
