import React from "react";
import "./Note.css";
import { FaTrash } from "react-icons/fa";

import parse from "html-react-parser";

function Note({ onDelete, id, timestamp, text }) {
  return (
    <div className="Note">
      <span className="Note-timestamp">{timestamp}</span>
      <p className="Note-content">{parse(text)}</p>
      <button className="Note-delete-btn" onClick={() => onDelete(id)}>
        <FaTrash className="Note-delete-icon" />
      </button>
    </div>
  );
}

export default Note;
