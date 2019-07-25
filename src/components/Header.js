import React, { Component } from 'react';
import { Route, Switch, Link, NavLink} from "react-router-dom";
import headerStyles from '../styles/header.module.css';


const Header = ( props ) => {
    return (
        <div className={headerStyles.headerContainer}>
            <h2>{props.title}</h2>
            <ul>
            <li><NavLink activeClassName="am-active" to="/" exact>Todo App</NavLink></li>
            <li><NavLink activeClassName="am-active" to="/likesApp">LikesApp</NavLink></li>
            <li><NavLink activeClassName="am-active" to="/localStorage">Local Storage</NavLink></li>
            </ul>
        </div>
        
    )
}

export default Header;