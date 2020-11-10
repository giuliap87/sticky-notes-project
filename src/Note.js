import React from "react";
import "./Note.css";
import { FaTrash, FaEdit } from "react-icons/fa";

function Note(props) {

  return (
    <div className="Note">
      <div className="Note-title-container">
        <h3 className="Note-title">{props.title}</h3>
      </div>
      <p className="Note-content">{props.content}</p>
      <FaTrash
        className="Note-delete-icon"
        onClick={() => props.click(props.id)}
      />
    </div>
  );
}

export default Note;
