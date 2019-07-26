import React, { Component } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import "./ArticleInfo.css";
import profileImg from "../images/AMGpass.png";
import PropTypes from 'prop-types'

class ArticleInfo extends Component {
  render(props) {
    return (
      <div className="infoContent">
        <div>
          <UserAvatar imgUrl={profileImg} />
        </div>
        <div>{this.props.authorName}</div>
        <span>
          {this.props.publishedDate} * {this.props.timeToRead} min read *
        </span>
      </div>
    );
  }
}

ArticleInfo.propTypes = {
  publishedDate: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired
}

export default ArticleInfo;
