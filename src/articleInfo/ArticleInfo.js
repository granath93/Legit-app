import React, { Component } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import "./ArticleInfo.css";
import PropTypes from "prop-types";

class ArticleInfo extends Component {
  render(props) {
    return (
      <div className="articleInfoContent">
        <div>
          <UserAvatar size={this.props.size} imgUrl={this.props.imgUrl} />
        </div>
        <div>
          <a href="/author" className="authorName">
            {this.props.authorName}
          </a>
          {this.props.children}
        </div>
        <span className="articleDetailContainer">
          {this.props.publishedDate} &middot; {this.props.timeToRead} min read
        </span>
      </div>
    );
  }
}

ArticleInfo.propTypes = {
  publishedDate: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  size: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  children: PropTypes.node || PropTypes.arrayOf(PropTypes.node)
};

export default ArticleInfo;
