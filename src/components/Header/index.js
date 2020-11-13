import React from "react";
import "./Header.css";
import { GiPin } from "react-icons/gi";

function Header() {
  return (
    <header className="Header">
      <GiPin className="Header-icon" /> <h1 className="Header-logo">Notes</h1>
    </header>
  );
}

export default Header;
