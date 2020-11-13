import React, { useState } from "react";
import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import "./Board.css";

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
      {error && <div>{error}</div>}
      <div>
        <AddNote addNote={addNote} setError={setError} />
      </div>
      <div className="Board-notes-container">
        {notes.map(({ title, content, id }) => (
          <Note
            key={id}
            id={id}
            title={title}
            content={content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
