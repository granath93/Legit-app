import React from 'react';
import PropTypes from 'prop-types';
import "./articleBody.css"

function ArticleBody(props){
    return (
        <div>
            <p className="bodyStyle">{props.text}</p>
            <p>hejhej <i>heeej</i></p>
        </div>
    );
}

ArticleBody.propTypes = {
    text: PropTypes.string.isRequired
}

export default ArticleBody;