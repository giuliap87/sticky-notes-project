import React, { useState } from "react";
import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import "./Board.css";

import { BiErrorCircle } from "react-icons/bi";

function Board() {
  const [error, setError] = useState("");
  const [notes, setNotes] = useState(
    () => JSON.parse(window.localStorage.getItem("notes")) || []
  );

  function addNote(inputVals) {
    setNotes((prevVal) => {
      return [...prevVal, inputVals];
    });
  }

  React.useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter(({ id: noteId }) => noteId !== id)
    );
  }

  return (
    <div className="Board">
      {error && <div className="Board-fillnote-error-msg"><BiErrorCircle className="Board-fillnote-error-icon"/>{error}</div>}
      <div>
        <AddNote addNote={addNote} setError={setError} />
      </div>
      <div className="Board-notes-container">
        {notes.map(({ id, timestamp, content }) => (
          <Note
            timestamp={timestamp}
            key={id}
            id={id}
            onDelete={deleteNote}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
