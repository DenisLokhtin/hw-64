import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <>
            <div id={props.index} className="post">
                <div>
                    <span className="date">Created on: {props.date}</span>
                    <p className="text">{props.title}</p>
                </div>
                <button onClick={props.open} className="btn-read">Read More >>></button>
            </div>
        </>
    )
};

export default Post;