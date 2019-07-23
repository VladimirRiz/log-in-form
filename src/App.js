import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import FormView from './components/FormView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormView />
      </div>
    );
  }
}


export default App;
