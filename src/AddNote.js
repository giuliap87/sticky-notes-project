import React, { useState } from "react";
import "./AddNote.css";
import { IoIosAddCircle } from "react-icons/io";

import {getDate} from "./utils";

function AddNote(props) {
  const [inputVals, setInputVals] = useState({
    title: "",
    content: "",
    time: ""
  });

  // set input values as state

  function handleChange(e) {
    const { name, value } = e.target;
    setInputVals((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        time: getDate(),
      };
    });
  }

  //submit note

  function submitNote() {
    props.add(inputVals, setInputVals);
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
          value={inputVals.title}
        />
      </div>
      <textarea
        onChange={handleChange}
        className="AddNote-textarea"
        placeholder="Content..."
        name="content"
        value={inputVals.content}
      />
      <IoIosAddCircle className="AddNote-add-icon" onClick={submitNote} />
    </div>
  );
}

export default AddNote;
