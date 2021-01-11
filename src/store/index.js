import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import noteReducer from "./reducer";
import notesOrderReducer from "./notesOrderReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
  order: notesOrderReducer,
});

export const store = createStore(rootReducer, undefined, composeWithDevTools());
