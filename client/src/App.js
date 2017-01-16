import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContextComponent from './components/ContextComponent';
import DashboardView from './views/DashboardView';
import DeployView from './views/DeployView';
import Login from './views/Login';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
       <Route path="/" component={Login}/>
        <Route path="/app" component={ContextComponent} >
          <IndexRoute component={DashboardView} />
          <Route path="/app/deploy" component={DeployView} />
        </Route>
      
        </Router>
        );
  }
}

export default App;
