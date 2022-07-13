import React from "react";

const Card = ({note}) => {
  return (
    <div className="card">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>
        <strong>Last Date: </strong>{note.lastDate}
      </p>
    </div>
  );
};

export default Card;
