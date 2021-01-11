import { v4 as uuidv4 } from "uuid";
import { formatForSorting } from "../utils";

const initialState = [
  // remove this default initial object , I only added it to verify the store works correctly
  {
    id: uuidv4(),
    timestamp: new Date(Date.now()).toISOString(),
    content: "hi there",
  },
];

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      if (action.order === "new-to-old") {
        return [
          {
            id: uuidv4(),
            timestamp: new Date(Date.now()).toISOString(),
            content: action.content,
          },
          ...state,
        ];
      } else if (action.order === "old-to-new") {
        return [
          ...state,
          {
            id: uuidv4(),
            timestamp: new Date(Date.now()).toISOString(),
            content: action.content,
          },
        ];
      } else {
        return state;
      }

    case "DELETE_NOTE":
      return state.filter((st) => st.id !== action.id);
    case "UPDATE_NOTE":
      const newNotes = state.map((st) => {
        if (st.id === action.id && action.updatedNote) {
          return { ...st, content: action.updatedNote };
        }
        return st;
      });
      return newNotes;
    case "SORT_NOTE":
      if (action.order === "new-to-old") {
        const newNotes = [...state].sort((a, b) => {
          const timeA = a.timestamp;
          const timeB = b.timestamp;
          return formatForSorting(timeA) - formatForSorting(timeB);
        });
        return newNotes;
      } else if (action.order === "old-to-new") {
        const newNotes = [...state].sort((a, b) => {
          const timeA = a.timestamp;
          const timeB = b.timestamp;
          return formatForSorting(timeB) - formatForSorting(timeA);
        });
        return newNotes;
      } else {
        return state;
      }
    default:
      return state;
  }
}
