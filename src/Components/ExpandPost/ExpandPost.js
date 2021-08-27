import React from 'react';
import './ExpandPost.css'
import Overlay from "../UI/Overlay/Overlay";

const ExpandPost = (props) => (
    <>
        <div className="ExpandPost">
            <div className="expandPost-header">
                <h2>Post</h2>
                <span onClick={props.hidePost}>X</span>
            </div>
            <div className="expandPost-inner">
                <p><b>Дата создания поста:</b> {props.date}</p>
                <p><b>Заголовок поста:</b> {props.title}</p>
                <p><b>Текст поста:</b> {props.text}</p>
                <button className="btn-read">Edit</button>
                <button className="btn-read">Delete</button>
            </div>
        </div>
        <Overlay/>
    </>
);

export default ExpandPost;