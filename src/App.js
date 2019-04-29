import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Edit from './editPortofolio';
import Create from './createPortfolio';
import List from './listPortfolio';
import View from './viewPortfolio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/list'} className="navbar-brand">Crypto Portfolio</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/view/:id' component={ View } />
              <Route exact path='/create' component={ Create } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
