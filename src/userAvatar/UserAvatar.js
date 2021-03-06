import React from "react";
import PropTypes from "prop-types";
import "./UserAvatar.css";

function UserAvatar(props) {
  const imgClasses = `avatarImg ${props.size}`;
  return (
    <img
      alt="The author of the article"
      className={imgClasses}
      src={require("./../images/" + props.imgUrl)}
    />
  );
}

UserAvatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default UserAvatar;
