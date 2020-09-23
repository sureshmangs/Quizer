import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import QuizCategory from './components/QuizCatergory';
import Login from './components/Login';

import * as serviceWorker from './serviceWorker';


const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz_categories" component={QuizCategory} />
          <Route exact path="/login" component={Login} />
        </App>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();