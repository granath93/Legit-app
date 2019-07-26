import React from "react";
import PropTypes from 'prop-types';
import "./UserAvatar.css";

function UserAvatar(props) {
  return (
    <img
      alt="The author of the article"
      className="avatarImg"
      src={props.imgUrl}
    />
  );
}

UserAvatar.propTypes = {
  imgUrl: PropTypes.string.isRequired
}

export default UserAvatar;
