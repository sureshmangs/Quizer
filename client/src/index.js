import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import QuizCategory from './components/QuizCatergory';
import Login from './components/Login';

import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quiz_categories" component={QuizCategory} />
        <Route exact path="/login" component={Login} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();