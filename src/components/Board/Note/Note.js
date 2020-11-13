import React from "react";
import "./Note.css";
import { FaTrash } from "react-icons/fa";

function Note({ onDelete, title, content, id }) {
  return (
    <div className="Note">
      <div className="Note-title-container">
        <h3 className="Note-title">{title}</h3>
      </div>
      <p className="Note-content">{content}</p>

      <button className="Note-delete-btn" onClick={() => onDelete(id)}><FaTrash className="Note-delete-icon"/></button>
    </div>
  );
}

export default Note;
