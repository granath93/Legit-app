import React, { Component } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import "./ArticlePreviewInfo.css";
import profileImg from "../images/AMGpass.png";
import PropTypes from "prop-types";

class ArticleInfo extends Component {
  render(props) {
    return (
      <div className="articleInfoContainer">
        <div>
          <UserAvatar size="smallImg" imgUrl={profileImg} />
        </div>
        <div>
          <a href="/author" className="authorName">
            {this.props.authorName}
          </a>
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
  timeToRead: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired
};

export default ArticleInfo;
