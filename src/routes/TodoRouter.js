import React from 'react';
import Todo from '../components/Todo';
import Likes from '../components/Likes';
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import LocalStorage from '../components/Localstorage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const TodoRouter = () => {
    return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Todo} />
    <Route path="/likesApp" component={Likes} />
    <Route path="/localStorage" component={LocalStorage} />
    <Route component={NotFoundPage} />
    </Switch> 
    </BrowserRouter>
    )
}

export default TodoRouter;