import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';
import Form from './Form';
import Story from './Story';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <nav>
          <div className="Links">
                        <Link to="/form">MadLibs Form</Link> {' '}
                      </div>
                      <div className="Links">
                        <Link to="/story">MadLibs Story</Link>
                      </div>
        </nav>
        <Route path="/form" component={Form} />
        <Route path="/story" component={Story} />
      </div>
    </Router>
    );
  }
}

export default App;
