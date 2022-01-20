import React, {useState, useEffect} from 'react';
import './Home.css'
import axiosApi from "../../AxiosApi";
import Post from "../Post/Post";


const Home = ({history}) => {
    const [posts, setPosts] = useState([]);

    const getMessages = async () => {
        try {
            await axiosApi.get('/messages.json').then(response => {
                if (response.data !== null) {
                    const arrayPosts = Object.entries(response.data);
                    const array = [];
                    for (const [key, value] of arrayPosts) {
                        array.push({...value, id: key})
                    }
                    setPosts(array);
                }
            });
        } catch (e) {
            console.log(e)
        }
    };

    const open = (id) => {
        if (history) {
            history.push(`/${id}`);
        }
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="posts">
            {posts.map((post) => {
                return (
                    <Post
                        date={post.date}
                        title={post.title}
                        key={post.id}
                        open={() => open(post.id)}
                    />
                )
            })}
        </div>
    )
};

export default Home;