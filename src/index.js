import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import QuestionShowPage from './QuestionShowPage';
import QuestionIndexPage from './QuestionIndexPage';

ReactDOM.render(
  QuestionShowPage(),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
