import React from "react";
import "./CategoryList.css";
import PropTypes from "prop-types";

function CategoryList(props) {
  return (
    <div className="listContent">
      <ul className="listStyle">{props.children}</ul>
    </div>
  );
}

CategoryList.propTypes = {
  children:  PropTypes.arrayOf(PropTypes.node) || PropTypes.node
};

export default CategoryList;
