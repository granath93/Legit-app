import React, {Component} from 'react';
import './FollowBtn.css';

class FollowBtn extends Component{
    render(props){
        return(
            <span>
                <button className="followBtn">Follow</button>
            </span>
        );
    }
}

export default FollowBtn; 