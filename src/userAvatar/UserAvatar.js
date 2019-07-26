import React from "react";
import profileImg from "../images/AMGpass.png";
import "./UserAvatar.css";

function UserAvatar() {
  return (
    <img
      alt="The author of the article"
      className="avatarImg"
      src={profileImg}
    />
  );
}

export default UserAvatar;
