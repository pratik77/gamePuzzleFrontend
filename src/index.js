import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn.js';
import Question1 from './Question1';
import Question2 from './Question2';
import SubmissionSection from './SubmissionSection';
import AdminDashboard from './AdminDashboard';
import * as serviceWorker from './serviceWorker';
import ThankYou from './ThankYou';
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
