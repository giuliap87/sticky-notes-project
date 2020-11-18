import React from "react";
import "./Note.css";
import { FaTrash } from "react-icons/fa";

import parse from "html-react-parser";

function Note({ onDelete, id, timestamp, content }) {
  return (
    <div className="Note">
      <span className="Note-timestamp">{timestamp}</span>
      <div>
      <div className="Note-content">{parse(content)}</div>
      </div>
      <button className="Note-delete-btn" onClick={() => onDelete(id)}>
        <FaTrash className="Note-delete-icon" />
      </button>
    </div>
  );
}

export default Note;

