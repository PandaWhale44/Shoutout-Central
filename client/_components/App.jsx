import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import actionCreaters from ''
// import { PrivateRoute } from './PrivateRoute';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={SignupPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
