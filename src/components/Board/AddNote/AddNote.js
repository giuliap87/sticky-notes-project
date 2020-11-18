import React, { useState } from "react";
import "./AddNote.css";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddNote({ addNote, setError }) {
  const [text, setText] = useState("");

  function reset() {
    setText("");
    setError("");
  }

  //submit note

  function submitNote() {
    if (!text) {
      return setError("Please add some content");
    }

    addNote({
      id: uuidv4(),
      timestamp: format(new Date(), "do MMM yyyy - HH:mm"),
      text
    });
    reset();
  }

  return (
    <div className="AddNote">
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
      <button className="AddNote-add-btn" onClick={submitNote}>
        <IoIosAddCircle className="AddNote-add-icon" />
      </button>
    </div>
  );
}

export default AddNote;
