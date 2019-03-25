import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsApp></ContactsApp>
      </div>
    );
  }
}

export default App;
