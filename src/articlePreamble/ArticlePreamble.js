import React from "react";
import Proptypes from "prop-types";
import "./ArticlePreample.css";

const ArticlePreample = props => {
  return <div className="preample">{props.text} A little interesting text about the article.</div>;
};

//ArticlePreample.proptypes = {
//  text: Proptypes.string.isRequired
//};
export default ArticlePreample;
