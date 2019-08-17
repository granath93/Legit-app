import React from "react";
import PropTypes from "prop-types";
import "./ArticlePreample.css";

const ArticlePreample = props => {
  return (
    <div className="preample">
      {props.text}
    </div>
  );
};

ArticlePreample.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticlePreample;
