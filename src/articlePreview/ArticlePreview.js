import React from "react";
//import PropTypes from "prop-types";
import Headtitle from "./../headtitle/HeadTitle";
import ArticlePreamble from "./../articlePreamble/ArticlePreamble";
import "./ArticlePreview.css";
import ArticleInfo from "./../articleInfo/ArticleInfo";
import Articles from "./../articlesMock";
import { Link, Route } from "react-router-dom";
import Article from "./../article/Article";

const ArticlePreview = props => {
  const articlePreview = Articles.map(item => (
    /*const articleInfo={
      imgUrl:"",
      authorName:item.author,
      publishedDate: item.date,
      timeToRead: item.minutesToRead,
      size:"smallImg"
    }*/
    <div key={item.id} className="previewContainer">
      <Link className="previewAnchorStyle" to={`/article/${item.id}`}>
        <div className="articlePreviewImg" style={{backgroundImage: 'url('+require(`./../images/${item.articleImg}`)+')'}}/>
        <Headtitle text={item.title} size="small" />
        <ArticlePreamble text={item.preamble} />
      </Link>
      <ArticleInfo
        imgUrl={item.authorImg}
        authorName={item.author}
        publishedDate={item.date}
        timeToRead={item.minutesToRead}
        size="smallImg"
      />
      <Route path="/article/:id" component={Article} />
    </div>
  ));
  return <div className="articlePreviewMainContainer">{articlePreview}</div>;
};

/*ArticlePreview.propTypes = {
  articles: PropTypes.object.isRequired
};*/

export default ArticlePreview;
