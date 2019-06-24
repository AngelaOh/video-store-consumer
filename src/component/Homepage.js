import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  navigation = () => {
    return (
      <Router>
        <p>
          <Link to="/MovieSearch">Search Movies</Link>
        </p>
        <p>
          <Link to="/MovieLibrary">Movie Library</Link>
        </p>
        <p>
          <Link to="/CustomerList">Customer List</Link>
        </p>

        <Route path="/MovieSearch" component={MovieSearch} />
        <Route path="/MovieLibrary" component={MovieLibrary} />
        <Route path="/CustomerList" component={CustomerList} />
      </Router>
    );
  };

  render() {
    return <section>{this.navigation()}</section>;
  }
}

export default Homepage;