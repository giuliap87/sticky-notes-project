import { v4 as uuidv4 } from "uuid";

const initialState = [];

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      if (action.order === "new-to-old") {
        return [
          ...state,
          {
            id: uuidv4(),
            timestamp: new Date(Date.now()).toISOString(),
            content: action.content,
          },
        ].sort((a, b) => (b.timestamp < a.timestamp ? -1 : 0));
      } else if (action.order === "old-to-new") {
        return [
          ...state,
          {
            id: uuidv4(),
            timestamp: new Date(Date.now()).toISOString(),
            content: action.content,
          },
        ].sort((a, b) => (a.timestamp < b.timestamp ? -1 : 0));
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
        return [...state].sort((a, b) => (a.timestamp < b.timestamp ? -1 : 0));
      } else if (action.order === "old-to-new") {
        return [...state].sort((a, b) => (b.timestamp < a.timestamp ? -1 : 0));
      } else {
        return state;
      }
    default:
      return state;
  }
}
