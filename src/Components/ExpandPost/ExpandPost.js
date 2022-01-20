import React, {useEffect, useState} from 'react';
import './ExpandPost.css'
import Overlay from "../UI/Overlay/Overlay";
import axiosApi from '../../AxiosApi'

const ExpandPost = (props) => {
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            const response = await axiosApi.get('/messages/' + props.match.params.id + '.json');
            setPost(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const close = () => {
        if (props.history) {
            props.history.push('/');
            setPost({});
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const deleteMessage = async (id) => {
        try {
            await axiosApi.delete('/messages/' + id + '.json');
            props.history.push('/');
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <>
            <div className="ExpandPost">
                <div className="expandPost-header">
                    <h2>Post</h2>
                    <span onClick={close}>X</span>
                </div>
                <div className="expandPost-inner">
                    <p><b>Дата создания поста:</b> {post.date}</p>
                    <p><b>Заголовок поста:</b> {post.title}</p>
                    <p><b>Текст поста:</b> {post.message}</p>
                    <button onClick={() => props.history.push('/' + props.match.params.id + '/edit')} className="btn-read">Edit</button>
                    <button onClick={() => deleteMessage(props.match.params.id)} className="btn-read">Delete</button>
                </div>
            </div>
            <Overlay/>
        </>
    )
};

export default ExpandPost;