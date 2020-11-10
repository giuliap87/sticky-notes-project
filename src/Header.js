import React from "react";
import "./Header.css";
import { GiPin } from "react-icons/gi";

function Header() {
  return <h1 className="Header"><GiPin className="Header-icon"/> <span style={{fontSize: "30px"}}>Notes</span></h1>;
}

export default Header;
