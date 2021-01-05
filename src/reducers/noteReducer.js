import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: [],
};

function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      if (!action.context) {
        return;
      } else
       return {...state, notes: state.notes.concat({
           id: uuidv4(),
           timestamp: new Date(),
           content: action.content
       })}
    default:
      return state;
  }
}

export default noteReducer;
