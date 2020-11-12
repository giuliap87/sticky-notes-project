import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "./Board.css";

import { v4 as uuidv4 } from "uuid";

function Board() {
  const [notes, setNotes] = useState(
    ()=> JSON.parse(window.localStorage.getItem("notes")) || []
  );

  function addNote(inputVals, setInputVals) {
    setNotes((prevVal) => {
      return [...prevVal, inputVals];
    });
    setInputVals({
      title: "",
      content: "",
    });
  }

  React.useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function deleteNote(id) {
    setNotes((prevVal) => {
      return prevVal.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="Board">
      <div>
        <AddNote add={addNote} />
      </div>
      <div className="Board-notes-container">
        {notes.map((note, index) => (
          <Note
            id={index}
            key={uuidv4()}
            title={note.title}
            content={note.content}
            click={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
