import React, { Component } from 'react';
import '../assets/App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello ContactMan</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
