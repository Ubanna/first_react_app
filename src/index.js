import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoItems from './components/TodoItems';
import * as serviceWorker from './serviceWorker';
import Todo from './components/Todo';
import TodoRouter from './routes/TodoRouter';
import Likes from './components/Likes';
import LocalStorage from './components/Localstorage';


ReactDOM.render(<TodoRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
