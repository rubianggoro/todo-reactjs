import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';

import Header from './componets-child/Header';

import ClassBase from './components/ClassBase';
import FunctionBase from './components/FunctionBase';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/classbase">
            <ClassBase />
          </Route>
          <Route path="/functionbase">
            <FunctionBase />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
