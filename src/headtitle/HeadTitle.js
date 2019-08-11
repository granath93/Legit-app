import React from "react";
import PropTypes from "prop-types";
import './HeadTitle.css'

function HeadTitle(props) {
  return (
    <div>
      <h1 className={props.size}>{props.text}</h1>
    </div>
  );
}

HeadTitle.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string
};
//children: PropTypes.string.isRequired
export default HeadTitle;
