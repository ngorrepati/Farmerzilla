import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_harvest from './App_harvest';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App_harvest />, document.getElementById('harvest'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
