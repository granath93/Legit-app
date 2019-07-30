import React from "react";
import PropTypes from "prop-types";
import './HeadTitle.css'

function HeadTitle(props) {
  return (
    <div>
      <h1 className="headTitle">{props.children}</h1>
    </div>
  );
}

HeadTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default HeadTitle;
