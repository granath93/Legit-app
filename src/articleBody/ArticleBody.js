import React from 'react';
import PropTypes from 'prop-types';
import "./articleBody.css";

function ArticleBody (props) {
    return (
        <div>
            <div id="text" className="bodyStyle" dangerouslySetInnerHTML={{__html: props.text }} />
            <p>Entity name for presenting characters direct in HTML:&lt;b&gt; </p>
            <p>This is to use HTML tags in HTML directly: <b>b</b></p>
        </div>
    );  
}

ArticleBody.propTypes = {
    text: PropTypes.string.isRequired
}

export default ArticleBody;