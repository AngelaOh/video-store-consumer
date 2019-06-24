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
    };
  }

  selectMovie = movie => {
    console.log('inside the select movie method!', movie.title);

    this.setState({
      selectedMovie: movie,
    });

    console.log(this.state.selectedMovie);
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

  onCustomerSelect = customer => {
    this.setState({ currentCustomer: customer });
  };

  render() {
    return <section>{this.navigation()}</section>;
  }
}

export default Homepage;
