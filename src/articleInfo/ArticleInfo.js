import React, { Component } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import "./ArticleInfo.css";
import profileImg from "../images/AMGpass.png";
import PropTypes from "prop-types";
import FollowBtn from "../followBtn/FollowBtn";

class ArticleInfo extends Component {
  render(props) {
    return (
      <div className="infoContent">
        <div>
          <UserAvatar imgUrl={profileImg} />
        </div>
        <div>
          <a href="/author" className="authorName">{this.props.authorName}</a>
          <FollowBtn/>
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
