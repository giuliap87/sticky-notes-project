import React from "react";
import "./Header.css";
import { GiPin } from "react-icons/gi";
import Select from "./Select";

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <GiPin className="Header-icon" />{" "}
        <h1 className="Header-title">Notes</h1>
      </div>
      {/* <Select sortByDate={sortByDate} /> */}
      <Select />
    </header>
  );
}

export default Header;
