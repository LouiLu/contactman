import React, { Component } from 'react';
import Contacts from './contacts/Contacts';
import Header from './layout/Header';
import AddContact from './contacts/AddContact';

// context provider
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
