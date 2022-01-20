import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import './App.css';
import ExpandPost from "./Components/ExpandPost/ExpandPost";
import Edit from "./Components/Edit/Edit";

function App() {
    return (
        <>
            <h2 className="header">My Blog</h2>
            <BrowserRouter>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">Add</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </div>
                <div className="container">
                    <div className="container-inner">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/add" component={Add}/>
                            <Route path="/:id" exact component={ExpandPost}/>
                            <Route path="/:id/edit" component={Edit}/>
                            <Route path="/About" component={About}/>
                            <Route path="/Contacts" component={Contacts}/>
                            <Route render={() => <h1>NOT FOUND</h1>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
