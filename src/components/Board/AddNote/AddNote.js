import React, { useState } from "react";
import "./AddNote.css";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CKeditor.css";

function AddNote({ addNote, setError }) {
  const [content, setContent] = useState("");

  function reset() {
    setContent("");
    setError("");
  }

  //submit note

  function submitNote() {
    if (!content) {
      return setError("Please add some content");
    }

    addNote({
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      content,
    });
    reset();
  }
  return (
    <div className="AddNote">
      <div id="editor">
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
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
      </div>
      <button className="AddNote-add-btn" onClick={submitNote}>
        <IoIosAddCircle className="AddNote-add-icon" />
      </button>
    </div>
  );
}

export default AddNote;
