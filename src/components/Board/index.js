import React, { useState } from "react";
import { useSelector } from "react-redux";

import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import "./Board.css";

import { BiErrorCircle } from "react-icons/bi";

function Board() {
  const [error, setError] = useState("");

  const notes = useSelector((state) => state.noteReducer.notes);
  console.log(notes);
  // const [notes, setNotes] = useState(
  //   () => JSON.parse(window.localStorage.getItem("notes")) || []
  // );

  // React.useEffect(() => {
  //   window.localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  // function addNote(inputVals) {
  //   if (window.localStorage.getItem("option") === "old-to-new") {
  //     setNotes((prevVal) => {
  //       return [...prevVal, inputVals];
  //     });
  //   } else if (window.localStorage.getItem("option") === "new-to-old") {
  //     setNotes((prevVal) => {
  //       return [inputVals, ...prevVal];
  //     });
  //   }
  // }

  // function sortByDate(option) {
  //   if (option === "new-to-old") {
  //     const newNotes = [...notes].sort((a, b) => b.timestamp - a.timestamp);
  //     setNotes(newNotes);
  //   } else if (option === "old-to-new") {
  //     const newNotes = [...notes].sort((a, b) => a.timestamp - b.timestamp);
  //     setNotes(newNotes);
  //   }
  // }

  // function deleteNote(id) {
  //   setNotes((prevNotes) =>
  //     prevNotes.filter(({ id: noteId }) => noteId !== id)
  //   );
  // }

  // function updateNote(id, updatedNote) {
  //   const newNotes = notes.map((note) => {
  //     if (note.id === id && updatedNote) {
  //       return { ...note, content: updatedNote };
  //     }
  //     return note;
  //   });
  //   setNotes(newNotes);
  // }

  return (
    <div className="Board">
      {error && (
        <div className="Board-fillnote-error-msg">
          <BiErrorCircle className="Board-fillnote-error-icon" />
          {error}
        </div>
      )}
      <div>
        {/* <AddNote addNote={addNote} setError={setError} /> */}
        <AddNote setError={setError} />
      </div>
      <div className="Board-notes-container">
        {notes.map(({ id, timestamp, content }) => (
          <Note
            timestamp={timestamp}
            key={id}
            id={id}
            // onDelete={deleteNote}
            // onUpdate={updateNote}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
