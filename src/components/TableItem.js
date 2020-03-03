import React from "react";
import styled from "styled-components";

const TableColumnItem = styled.th`
  vertical-align: middle !important;
  text-align: center !important;
`;

const TableItem = ({ id, name, status, handleDelete, handleEdit }) => {
  return (
    <tr>
      <TableColumnItem>{id}</TableColumnItem>
      <TableColumnItem>{name}</TableColumnItem>
      <TableColumnItem>
        {(status === "important" && (
          <span className="tag is-danger">Quan Trọng</span>
        )) ||
          (status === "normal" && (
            <span className="tag is-primary">Bình Thường</span>
          )) || <span className="tag is-info">Kém Quan Trọng</span>}
      </TableColumnItem>
      <TableColumnItem>
        <button className="button is-link" onClick={handleEdit}>
          <span className="icon">
            <i className="fas fa-pencil-alt"></i>
          </span>
          <span>Sửa</span>
        </button>{" "}
        <button className="button is-danger" onClick={handleDelete}>
          <span className="icon">
            <i className="fas fa-trash-alt"></i>
          </span>
          <span>Xóa</span>
        </button>
      </TableColumnItem>
    </tr>
  );
};

export default TableItem;
