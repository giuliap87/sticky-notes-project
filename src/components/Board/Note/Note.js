import React, { useState } from "react";
import "./Note.css";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../AddNote/CKeditor.css";

import parse from "html-react-parser";

import {formatDate} from "../../../utils";

function Note({ onDelete, onUpdate, id, timestamp, content }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(content);

  function showEditor(){
    setIsEditing(true)
  }

  function handleUpdate(){
    onUpdate(id, updatedNote)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div class="Note-editor">
        <CKEditor 
          editor={ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "numberedList",
              "bulletedList",
              "|",
              "undo",
              "redo",
            ],
          }}
          data={updatedNote}
          onChange={(event, editor) => {
            const data = editor.getData();
            setUpdatedNote(data);
          }}
        />
        <button onClick={handleUpdate} className="Note-saveedit-btn"><FaSave className="Note-saveedit-icon"/></button>
      </div>
    );
  } else {
    return (
      <div className="Note">
        <span className="Note-timestamp">{formatDate(timestamp)}</span>
        <div className="Note-content">{parse(content)}</div>
        <button className="Note-edit-btn" onClick={showEditor}>
          <FaEdit className="Note-edit-icon" />
        </button>
        <button className="Note-delete-btn" onClick={() => onDelete(id)}>
          <FaTrash className="Note-delete-icon" />
        </button>
      </div>
    );
  }
}

export default Note;
