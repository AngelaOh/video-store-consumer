import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';

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
    this.setState({ currentCustomer: customer });
  };

  navigation = () => {
    return (
      <Router>
        {this.state.selectedMovie && (
          <h1>
            The movie, {this.state.selectedMovie.title}, has been selected
          </h1>
        )}

        {this.state.selectedCustomer && (
          <h1>
            The customer, {this.state.selectedCustomer.name}, has been selected
          </h1>
        )}

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
    return <section>{this.navigation()}</section>;
  }
}

export default Homepage;
