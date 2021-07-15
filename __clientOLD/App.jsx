/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginForm from './components2/LoginPage';
// import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>WELCOME TO LOGIN PAGE</p>
          <LoginForm />
      </div>
    );
  }
}

export default App;
