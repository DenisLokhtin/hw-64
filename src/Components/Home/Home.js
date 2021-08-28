import React from 'react';
import './Home.css'
import Post from "../Post/Post";

const Home = (props) => (
    <div className="posts">
        {props.posts.map((post, index) => {
            return (
                <Post
                    showPost={props.showPost}
                    key={index}
                    index={index}
                    title={post.title}
                    date={post.date}
                    text={post.message}
                />
            )
        })}
    </div>
);

export default Home;