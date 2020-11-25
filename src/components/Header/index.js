import React from "react";
import "./Header.css";
import { GiPin } from "react-icons/gi";

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <GiPin className="Header-icon"/> <h1 className="Header-title">Notes</h1>
      </div>
    </header>
  );
}

export default Header;
