import "./App.css";
import React from "react";

import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
