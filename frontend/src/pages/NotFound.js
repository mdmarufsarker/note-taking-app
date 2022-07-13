import React from "react";
// import { Link } from "react-router-dom";
// import arrow from "../asstes/double-arrow.png";
import gif from "../asstes/Four_O_Four.gif";

const NotFound = () => {
  return (
    <div className="not-found" style={{ overflow: "hidden" }}>
      <img src={gif} alt="404" style={{ height: "90vh", width: "100vw" }} />
    </div>
  );
};

export default NotFound;
