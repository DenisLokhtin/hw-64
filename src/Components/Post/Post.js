import React from 'react';
import './Post.css'

const Post = (props) => (
    <div className="post">
        <div>
            <span className="date">{props.date}</span>
            <p className="text">{props.text}</p>
        </div>
        <button className="btn-read">Read More >></button>
    </div>
);

export default Post;