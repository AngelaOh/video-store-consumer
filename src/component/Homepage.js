import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';
import CheckOut from './CheckOut';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: undefined,
      selectedCustomer: undefined,
    };
  }

  selectMovie = movie => {
    this.setState({ selectedMovie: movie });
  };

  onCustomerSelect = customer => {
    this.setState({ selectedCustomer: customer });
  };

  displaySelected = () => {
    const { selectedMovie, selectedCustomer } = this.state;
    return (
      (selectedMovie || selectedCustomer) && (
        <CheckOut movie={selectedMovie} customer={selectedCustomer} />
      )
    );
  };

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
        <Route
          path="/CustomerList"
          render={() => (
            <CustomerList customerSelectCallback={this.onCustomerSelect} />
          )}
        />
        <Route
          path="/MovieLibrary"
          render={() => <MovieLibrary selectMovie={this.selectMovie} />}
        />
      </Router>
    );
  };

  render() {
    return (
      <div>
        <section>{this.displaySelected()}</section>
        <section>{this.navigation()}</section>
      </div>
    );
  }
}

export default Homepage;
