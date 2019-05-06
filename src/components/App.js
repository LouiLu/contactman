import React, { Component } from 'react';
import Contacts from './contacts/Contacts';
import Header from './layout/Header';
import About from './pages/About';
import AddContact from './contacts/AddContact';
import EditContact from './contacts/EditContact';

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// context provider
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css';
import NotFound from './pages/NotFound';
import Test from './test/Test';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
