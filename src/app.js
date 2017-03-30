import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducer/index'; //Reducer
import LOGIN from './components/login/index';

let store = createStore(Reducers);
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LOGIN.LoginComponent}></Route>
    </Router>
  </Provider>,
  document.getElementById('reactHW')
)
