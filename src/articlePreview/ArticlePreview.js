import React from "react";
import PropTypes from "prop-types";
import Headtitle from "./../headtitle/HeadTitle";
import ArticlePreamble from "./../articlePreamble/ArticlePreamble";
import "./ArticlePreview.css";
import ArticlePreviewInfo from "./../articlePreviewInfo/ArticlePreviewInfo";
import Articles from "./../articlesMock";
import { Link, Route } from "react-router-dom";
import Article from "./../article/Article";

const ArticlePreview = props => {
  const articlePreview = Articles.map(item => (
    /*const articlePreviewInfo={
      imgUrl:"",
      authorName:item.author,
      publishedDate: item.date,
      timeToRead: item.minutesToRead
    }*/
    <div key={item.id} className="previewContainer">
      <Link className="previewAnchorStyle" to={`/article/${item.id}`}>
        <img
          className="articlePreviewImg"
          src={require(`./../images/${item.articleImg}`)}
          alt=""
        />
        <Headtitle text={item.title} size="small" />
        <ArticlePreamble text={item.preamble} />
      </Link>
      <ArticlePreviewInfo
        imgUrl=""
        authorName={item.author}
        publishedDate={item.date}
        timeToRead={item.minutesToRead}
      />
      <Route path="/article/:id" component={Article} />
    </div>
  ));
  return <div className="articlePreviewMainContainer">{articlePreview}</div>;
};
//<Link to={`/article/:${item.id}`}></Link>
ArticlePreview.propTypes = {
  /*headtitle: PropTypes.string.isRequired,
  preamble: PropTypes.string.isRequired,
  articleInfo: PropTypes.object.isRequired*/
  articles: PropTypes.object.isRequired
};

export default ArticlePreview;
