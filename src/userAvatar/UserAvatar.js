import ReactDOM from 'react-dom';
import React from 'react';

function UserAvatar(){
    return (
        <div>
            <h1>Hejhej!</h1>
        </div>
    );
}

const link = "../DEMO.png"
const element = (<UserAvatar />);

ReactDOM.render(
    element,
    document.getElementById('articleInfo')
);