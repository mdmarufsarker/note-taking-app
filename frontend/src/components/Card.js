import React from "react";
import { FiEdit } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";

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
          <FiEdit />
          <GrUpdate />
        </div>
      </div>
      <hr style={{marginBottom: "5px"}}/>
      <p>{note.description}</p>
      <p>
        <strong>Last Date: </strong>
        {note.lastDate}
      </p>
    </div>
  );
};

export default Card;
