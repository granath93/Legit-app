import React from "react";
import PropTypes from "prop-types";
import "./AarticleImg.css";

function ArticleImg(props) {
  return (
    <div className="articleImgContainer">
      <img className="topImg" alt="" src={props.url} />
      <div className="comment">{props.comment}</div>
    </div>
  );
}

ArticleImg.propTypes = {
  url: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default ArticleImg;
