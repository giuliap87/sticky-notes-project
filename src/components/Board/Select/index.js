import React, { useState, useEffect } from "react";
import "./Select.css";

function Select({ sortByDate }) {
  const [state, setState] = useState(
    ()=> window.localStorage.getItem("option") || "old-to-new"
  );

  function handleChange(e) {
    const val = e.target.value;
    sortByDate(val);
    setState(val);
  }

  useEffect(() => {
    window.localStorage.setItem("option", state);
  });

  return (
    <div className="Select">
      <label htmlFor="Select-input" className="Select-label">
        Sort by:
      </label>
      <select value={state} onChange={handleChange} className="Select-input">
        <option value="old-to-new">Older to newer</option>
        <option value="new-to-old">Newer to older</option>
      </select>
    </div>
  );
}

export default Select;
