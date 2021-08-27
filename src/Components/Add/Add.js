import {useState} from "react";
import axiosApi from "../../AxiosApi";
import './Add.css'

function Add(props) {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const changeTitleValue = (value) => {
        setTitle(value);
    };

    const changeMessageValue = (value) => {
        setMessage(value);
    };

    const send = async event => {
        event.preventDefault()

        const sendingMessage = {
            title: title,
            date: new Date(),
            message: message,
        };

        try {
            await axiosApi.post('/messages.json', sendingMessage);
        } finally {
            props.history.push('/');
        }
    }

    return (
        <div className="addPost">
            <form onSubmit={send}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => changeTitleValue(e.target.value)} value={title} className="inputs input-title" name="title" placeholder="Title"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e) => changeMessageValue(e.target.value)} value={message} className="inputs input-message" name="message" placeholder="Message"/>
                <button className="btn-read">Send</button>
            </form>
        </div>
    );
}

export default Add;