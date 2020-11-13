import React, { useState } from "react";
import "./AddNote.css";
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

function AddNote({ addNote, setError }) {
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
      return setError("please add a title and content");
    }

    addNote({ ...newNote, id: uuidv4() });
    reset();
  }

  return (
    <div className="AddNote">
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
      <button  className="AddNote-add-btn" onClick={submitNote}>
        <IoIosAddCircle className="AddNote-add-icon" />
      </button>
    </div>
  );
}

export default AddNote;
