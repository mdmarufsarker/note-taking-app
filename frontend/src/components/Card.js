import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ note }) => {
  return (
    <div className="card">
      <div
        className="editUpdate"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "medium", fontSize: "30px" }}>
          {note.title}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaRegHeart style={{ fontSize: "20px" }} />
          <FiEdit style={{ fontSize: "20px" }} />
          <FaRegTrashAlt style={{ fontSize: "20px" }} />
        </div>
      </div>
      <hr style={{ marginBottom: "5px" }} />
      <p>{note.description}</p>
      <p style={{ textAlign: "right" }}>
        <strong>Last Date: </strong>
        {note.lastDate}
      </p>
    </div>
  );
};

export default Card;
