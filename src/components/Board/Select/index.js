import React from "react";
import "./Select.css";
import {useSelector, useDispatch} from "react-redux";
import {selectOrder} from "../../../store/selectors";


function Select({ sortByDate }) {

  const option = useSelector(selectOrder);
  const dispatch = useDispatch();

  function handleChange(e) {
    const val = e.target.value;
    sortByDate(val);
    dispatch({type: "CHANGE_ORDER", order: val})
  }

  return (
    <div className="Select">
      <label htmlFor="Select-input" className="Select-label">
        Sort by:
      </label>
      <select value={option} onChange={handleChange} className="Select-input">
        <option value="old-to-new">Older to newer</option>
        <option value="new-to-old">Newer to older</option>
      </select>
    </div>
  );
}

export default Select;
