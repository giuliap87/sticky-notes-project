import React, { useState } from "react";
import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import Select from "./Select/index";
import "./Board.css";

import { BiErrorCircle } from "react-icons/bi";
import { formatForSorting } from "../../utils";
import { useSelector } from "react-redux";
import { selectNotes } from "../../store/selectors";

function Board() {
  const [error, setError] = useState("");
  const notes = useSelector(selectNotes); // we do not need to keep a local state of notes anymore .. we select it directly from the store

  // TODO: now you need to uncomment the logic inside the functions to work with the redux store ..
  // my suggestion is to start with them one by one , verify it works and move to the next
  // once you are done you can re-introduce the persisted state and store subscription to sync with local storage
  // but this part is not done in the component anymore

  function addNote(inputVals) {
    // if (window.localStorage.getItem("option") === "old-to-new") {
    //   setNotes((prevVal) => {
    //     return [...prevVal, inputVals];
    //   });
    // } else if (window.localStorage.getItem("option") === "new-to-old") {
    //   setNotes((prevVal) => {
    //     return [inputVals, ...prevVal];
    //   });
    // }
  }

  function sortByDate(option) {
    // if (option === "new-to-old") {
    //   const newNotes = [...notes].sort((a, b) => {
    //     const timeA = a.timestamp;
    //     const timeB = b.timestamp;
    //     return formatForSorting(timeB) - formatForSorting(timeA);
    //   });
    //   setNotes(newNotes);
    // } else if (option === "old-to-new") {
    //   const newNotes = [...notes].sort((a, b) => {
    //     const timeA = a.timestamp;
    //     const timeB = b.timestamp;
    //     return formatForSorting(timeA) - formatForSorting(timeB);
    //   });
    //   setNotes(newNotes);
    // }
  }

  function deleteNote(id) {
    // setNotes((prevNotes) =>
    //   prevNotes.filter(({ id: noteId }) => noteId !== id)
    // );
  }

  function updateNote(id, updatedNote) {
    // const newNotes = notes.map((note) => {
    //   if (note.id === id && updatedNote) {
    //     return { ...note, content: updatedNote };
    //   }
    //   return note;
    // });
    // setNotes(newNotes);
  }

  return (
    <div className="Board">
      <Select sortByDate={sortByDate} />
      {error && (
        <div className="Board-fillnote-error-msg">
          <BiErrorCircle className="Board-fillnote-error-icon" />
          {error}
        </div>
      )}
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
            onUpdate={updateNote}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
