import React from 'react';
import './Home.css'
import Post from "../Post/Post";

const Home = (props) => (
    <div>
        {props.posts.map((post, index) => {
            return (
                <Post
                    key={index}
                    title={post.title}
                    date={post.date}
                    text={post.message}
                />
            )
        })}
    </div>
);

export default Home;