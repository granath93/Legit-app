import React from "react";
import Headtitle from "./../headtitle/HeadTitle";
import ArticleImg from "./../articleImg/ArticleImg";
import ArticlePreamble from "./../articlePreamble/ArticlePreamble";
import "./ArticlePreview.css";
import ArticlePreviewInfo from "./../articlePreviewInfo/ArticlePreviewInfo";

const ArticlePreview = props => {
  return (
    <div className="previewContainer">
      <a className="previewAnchorStyle" href="www.google.se">
        <ArticleImg {...props.articleImg} />
        <Headtitle {...props.headtitle}></Headtitle>
        <ArticlePreamble text={props.preamble} />
      </a>
      <ArticlePreviewInfo {...props.articleInfo} />
    </div>
  );
};

export default ArticlePreview;
