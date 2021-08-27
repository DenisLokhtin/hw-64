import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosApi from './AxiosApi'
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    const getMessages = async () => {
        try {
            await axiosApi.get('/messages.json').then(response => {
                console.log(response.data)
                const arrayPosts = Object.values(response.data)
                setPosts(arrayPosts)
            });
            setLoading(true)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <h2 className="header">My Blog</h2>
            <BrowserRouter>
                <div className="navigation">
                    <NavLink to="/posts">Home</NavLink>
                    <NavLink to="/posts/add">Add</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>
                </div>
                <div className="container">
                    <div className="container-inner">
                        <Switch>
                            <Route path="/" render={() => <Home posts={posts}/>}/>
                            <Route path="/posts/add" exact component={Add}/>
                            <Route path="/About" exact component={About}/>
                            <Route path="/Contacts" exact component={Contacts}/>
                            <Route render={() => <h1>NOT FOUND</h1>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
