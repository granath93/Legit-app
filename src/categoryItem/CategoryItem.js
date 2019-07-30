import React from "react";
import PropTypes from "prop-types";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <li className="itemStyle">
      <a href={props.url}> {props.name} </a>
    </li>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryItem;
