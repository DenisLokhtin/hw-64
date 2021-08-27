import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {useState} from "react";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import './App.css';

function App() {
    return (
        <>
            <h2 className="header">My Blog</h2>
            <BrowserRouter>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Add">Add</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>
                </div>
                <div className="container">
                    <div className="container-inner">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/Add" component={Add}/>
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
