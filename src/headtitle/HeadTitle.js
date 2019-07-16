import React from 'react';
import ReactDOM from 'react-dom';

function HeadTitle(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.name}</p>
        </div>
    );
}

const headTitle = "Head title";
const author = "Amanda Granath";
const element = (<HeadTitle title={headTitle} name={author}/>);


ReactDOM.render(
    element,
    document.getElementById('headTitle')
);


