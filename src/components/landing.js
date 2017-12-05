import React, { Component } from 'react';

class Landing extends React.Component {
  render() {
    return (
    <div>
      <form className = "login">
        <button>Log In</button>
        <label>Username: </label><input type="text"/>
        <label>Password: </label><input type="text"/>
        <input type="submit"/>
      </form>

      <form className = "register">
        <button>Sign Up</button>
        <label>Username: </label><input type="text"/>
        <label>Password: </label><input type="text"/>
        <input type="submit"/>
      </form>
    </div>
  )}
}

export default Landing;
