import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions/index";

const TableColumnItem = styled.th`
  vertical-align: middle !important;
  text-align: center !important;
`;

const TableItem = ({ stt, item }) => {
  const dispatch = useDispatch();
  const { id, name, status } = item;

  function handleEdit(item) {
    dispatch(actions.openEditForm(item));
  }

  function handleDelete(id) {
    dispatch(actions.deleteItem(id));
  }

  function switchStatus(item) {
    dispatch(actions.switchStatus(item));
  }

  return (
    <tr>
      <TableColumnItem>{stt}</TableColumnItem>
      <TableColumnItem>{name}</TableColumnItem>
      <TableColumnItem>
        {(status === "important" && (
          <span className="tag is-danger" onClick={() => switchStatus(item)}>
            Quan Trọng
          </span>
        )) ||
          (status === "normal" && (
            <span className="tag is-primary" onClick={() => switchStatus(item)}>
              Bình Thường
            </span>
          )) || (
            <span className="tag is-info" onClick={() => switchStatus(item)}>
              Kém Quan Trọng
            </span>
          )}
      </TableColumnItem>
      <TableColumnItem>
        <button className="button is-link" onClick={() => handleEdit(item)}>
          <span className="icon">
            <i className="fas fa-pencil-alt"></i>
          </span>
          <span>Sửa</span>
        </button>{" "}
        <button className="button is-danger" onClick={() => handleDelete(id)}>
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
