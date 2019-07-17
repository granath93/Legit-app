import React, {Component} from 'react';
import UserAvatar from '../userAvatar/UserAvatar';
import './ArticleInfo.css'

class ArticleInfo extends React.Component {
   constructor(props){
       super(props);
        this.state = {date: new Date()};
   }
    render(){
        return (
            <div className="infoContent">
                <div className="">
                    <UserAvatar/>
                </div>
                <div className="">
                    {name}
                </div>
                <span>
                    {this.state.date.toLocaleDateString()} * {time.toString()} min read *
                </span>
            </div>
        );
    }
}

const name ="Amanda Granath";
const time = 23;
export default ArticleInfo;