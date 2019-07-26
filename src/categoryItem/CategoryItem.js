import React from "react";
import PropTypes from "prop-types";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <li className="itemStyle">
      {props.name}
    </li>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryItem;
