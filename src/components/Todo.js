import React from "react";
import PropTypes from 'prop-types';

const todo = (onClick, completed, text) => {
  <li
    onClick={onClick}
    style={{textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default todo;