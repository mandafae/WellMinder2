import React, { Component } from 'react';
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import Landing from './components/landing'
import Preferences from './components/preferences'
import Quiz from './components/quiz'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
        <Landing />
        <Preferences />
        <Quiz />
      </div>
    );
  }
}

export default App;
