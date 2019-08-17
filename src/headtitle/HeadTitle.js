import React from "react";
import PropTypes from "prop-types";
import './HeadTitle.css'

function HeadTitle(props) {
  return (
    <div className={props.size}>
      {props.text}
    </div>
  );
}

HeadTitle.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string
};
//children: PropTypes.string.isRequired
export default HeadTitle;
