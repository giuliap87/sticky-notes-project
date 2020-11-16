import React, { useState } from "react";
import "./AddNote.css";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddNote({ addNote, setError }) {
  const [text, setText] = useState("");
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const { title, content } = newNote;

  // set input values as state

  function handleChange(e) {
    const { name, value } = e.target;

    setNewNote((prevInputVals) => ({
      ...prevInputVals,
      [name]: value,
    }));
  }

  function reset() {
    setNewNote({
      title: "",
      content: "",
    });
    setError("");
  }

  //submit note

  function submitNote() {
    if (!title || !content) {
      return setError("Please add a title and content");
    }

    addNote({
      ...newNote,
      id: uuidv4(),
      timestamp: format(new Date(), "do MMM yyyy - HH:mm"),
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
      <div className="AddNote-title-container">
        <input
          onChange={handleChange}
          className="AddNote-input-title"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
        />
      </div>
      <textarea
        className="AddNote-textarea"
        onChange={handleChange}
        placeholder="Content..."
        name="content"
        value={content}
      />
      <button className="AddNote-add-btn" onClick={submitNote}>
        <IoIosAddCircle className="AddNote-add-icon" />
      </button>
    </div>
  );
}

export default AddNote;
