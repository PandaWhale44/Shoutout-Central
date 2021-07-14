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
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Testing App Component...</p>
        <MainContainer />
      </div>
    );
  }
}

export default App;
