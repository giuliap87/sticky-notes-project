import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import noteReducer from "./reducer";

export const store = createStore(noteReducer, undefined, composeWithDevTools());
