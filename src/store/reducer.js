import { v4 as uuidv4 } from "uuid";
import { formatForSorting } from "../utils";

const initialState = {
  notes: [
    // remove this default initial object , I only added it to verify the store works correctly
    {
      id: 123,
      timestamp: new Date(Date.now()).toISOString(),
      content: "hi there",
    },
  ],
};

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      if (action.order === "new-to-old") {
        return {
          ...state,
          notes: [
            {
              id: uuidv4(),
              timestamp: new Date(Date.now()).toISOString(),
              content: action.content,
            },
            ...state.notes,
          ],
        };
      } else if (action.order === "old-to-new") {
        return {
          ...state,
          notes: [
            ...state.notes,
            {
              id: uuidv4(),
              timestamp: new Date(Date.now()).toISOString(),
              content: action.content,
            },
          ],
        };
      } else {
        return state;
      }

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };

    case "UPDATE_NOTE":
      const newNotes = state.notes.map((note) => {
        if (note.id === action.id && action.updatedNote) {
          return { ...note, content: action.updatedNote };
        }
        return note;
      });
      return { notes: newNotes };
    case "SORT_NOTE":
      if (action.order === "new-to-old") {
        const newNotes = [...state.notes].sort((a, b) => {
          const timeA = a.timestamp;
          const timeB = b.timestamp;
          return formatForSorting(timeA) - formatForSorting(timeB);
        });
        return { notes: newNotes };
      } else if (action.order === "old-to-new") {
        const newNotes = [...state.notes].sort((a, b) => {
          const timeA = a.timestamp;
          const timeB = b.timestamp;
          return formatForSorting(timeB) - formatForSorting(timeA);
        });
        return { notes: newNotes };
      } else {
        return state;
      }
    default:
      return state;
  }
}
