import React from "react";
import PropTypes from 'prop-types';
import "./UserAvatar.css";

function UserAvatar(props) {
  const imgClasses = `avatarImg ${props.size}`;
  return (
    <img
      alt="The author of the article"
      className={imgClasses}
      src={props.imgUrl}
    />
  );
}

UserAvatar.propTypes = {
  imgUrl: PropTypes.string.isRequired
}

export default UserAvatar;
