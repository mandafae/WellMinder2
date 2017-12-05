import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/preferences' component={Preferences}/>
        <Route path='/checkin' component={Quiz} />
      </div>
    );
  }
}

export default App;
