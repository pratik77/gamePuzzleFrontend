import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLoadTest from './AppLoadTest';
import SignIn from './SignIn.js';
import Question from './Question';
import SubmissionSection from './SubmissionSection';
import AdminDashboard from './AdminDashboard';
import * as serviceWorker from './serviceWorker';
import ThankYou from './ThankYou';
import WrongAnswerConfirmationPage from './WrongAnswerConfirmationPage';
import CorrectAnswerConfirmationPage from './CorrectAnswerConfirmationPage';
import GiveUpConfirmationPage from './GiveUpConfirmationPage';
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(
  <React.StrictMode>
    {/* <Question9/> */}
    <App /> 
    {/* <AppLoadTest />  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
