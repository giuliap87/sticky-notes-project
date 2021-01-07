import React, { useState } from "react";
import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";
import Select from "./Select/index";
import "./Board.css";

import { BiErrorCircle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { selectNotes, selectOrder } from "../../store/selectors";

function Board() {
  const [error, setError] = useState("");
  const notes = useSelector(selectNotes);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  function addNote(inputVals) {
    dispatch({ type: "ADD_NOTE", content: inputVals, order: order });
  }

  function sortByDate(option) {
    dispatch({ type: "SORT_NOTE", order: order });
  }

  function deleteNote(id) {
    dispatch({ type: "DELETE_NOTE", id: id });
  }

  function updateNote(id, updatedNote) {
    dispatch({ type: "UPDATE_NOTE", id: id, updatedNote: updatedNote });
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
