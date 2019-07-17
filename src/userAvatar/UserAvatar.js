import React from 'react';
import profileImg from '../images/AMGpass.png';
import './UserAvatar.css'

function UserAvatar(){
    return <img className="avatarImg" src={profileImg}/>;
}

export default UserAvatar;