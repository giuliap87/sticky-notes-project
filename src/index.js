import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";


import noteReducer from "./reducers/noteReducer";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localStorage";

import throttle from "lodash/throttle";

const persistedState = loadStateFromLocalStorage();

const store = createStore(noteReducer, persistedState, composeWithDevTools());

console.log(store.getState())
store.subscribe(
  throttle(() => {
    saveStateToLocalStorage({
      noteReducer: store.getState().noteReducer,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
