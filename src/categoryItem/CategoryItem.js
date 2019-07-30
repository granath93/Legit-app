import React from "react";
import PropTypes from "prop-types";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <li className="itemStyle">
      <a className="categoryLink" href={props.url}> {props.name} </a>
    </li>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default CategoryItem;
