// import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ note }) => {

  // delete a note
  const handleDelete = async () => {
    const response = await fetch(`/api/notes/${note._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log("note deleted:", json);
    }
  }

  // edit a note
  const handleEdit = async () => {
    const response = await fetch(`/api/notes/${note._id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: note.title,
        description: note.description,
        lastDate: note.lastDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      console.log("note edited:", json);
    }
  }
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
          <FaRegHeart style={{ fontSize: "20px", cursor: "pointer" }} />
          <FiEdit style={{ fontSize: "20px", cursor: "pointer" }} onSubmit={handleEdit} />
          <FaRegTrashAlt style={{ fontSize: "20px", cursor: "pointer" }} onSubmit={handleDelete}/>
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
