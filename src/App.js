import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import FormView from './components/FormView'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Loggined from './components/Auth'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path='/' exact component={FormView}></Route>
          <Route path="/auth" component={Loggined} />
        </div>
      </Router>
    );
  }
}



// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }

// function Topics() {
//   return (
//     <div>
//       <h2>Topics</h2>
//     </div>
//   )
// }

export default App;
