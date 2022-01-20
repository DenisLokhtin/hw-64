import {useEffect, useState} from "react";
import axiosApi from "../../AxiosApi"
import '../Add/Add.css'

function Edit(props) {
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            const response = await axiosApi.get('/messages/' + props.match.params.id + '.json');
            setPost(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const changeValue = (name, value) => {
        setPost(prevState => ({...prevState, [name]: value}));
    };

    const send = async event => {
        event.preventDefault();

        const sendingMessage = {
            title: post.title,
            date: post.date,
            message: post.message,
        };

        try {
            await axiosApi.put('/messages/' + props.match.params.id + '.json', sendingMessage);
        } finally {
            props.history.push('/');
        }
    };

    return (
        <div className="addPost">
            <form onSubmit={send}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => changeValue(e.target.name, e.target.value)} value={post.title}
                       className="inputs input-title" name="title" placeholder="Title"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e) => changeValue(e.target.name, e.target.value)} value={post.message}
                          className="inputs input-message" name="message" placeholder="Message"/>
                <button className="btn-read">Send</button>
            </form>
        </div>
    );
}

export default Edit;