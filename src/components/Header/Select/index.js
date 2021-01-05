import React, { useState, useEffect } from "react";
import "./Select.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function SelectComponent({ sortByDate }) {
  const [state, setState] = useState(
    () => window.localStorage.getItem("option") || "old-to-new"
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
      <FormControl>
        <InputLabel id="sortLabel" className="Select-label">
          Sort by:
        </InputLabel>
        <Select
          labelId="sortLabel"
          value={state}
          onChange={handleChange}
          className="Select-input"
        >
          <MenuItem value="old-to-new">Older to newer</MenuItem>
          <MenuItem value="new-to-old">Newer to older</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectComponent;
