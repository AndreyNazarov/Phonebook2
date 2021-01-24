import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Find contact"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};
