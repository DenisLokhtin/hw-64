import React from 'react';
import './Post.css'

const Post = (props) => (
    <div className="post">
        <div>
            <span className="date">Created on: {props.date}</span>
            <p className="text">{props.title}</p>
        </div>
        <button onClick={props.showPost} id={props.index} className="btn-read">Read More >></button>
    </div>
);

export default Post;