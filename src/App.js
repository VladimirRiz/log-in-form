import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import FormView from './components/FormView'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loggined from './components/Auth'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Header}></Route>
          <Route path='/' exact component={FormView}></Route>
          <Route path="/auth" component={Loggined} />
        </div>
      </Router>
    );
  }
}

export default App;
