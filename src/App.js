import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
// Store 
import Store from './Components/ReduxProperties/Store/Store';
// Provider
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Router>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route path="/" component={Login} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }

}


export default App;
