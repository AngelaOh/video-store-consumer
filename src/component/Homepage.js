import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';
import CheckOut from './CheckOut';
import axios from 'axios';

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

  onCheckOut = () => {
    const params = {
      title: this.state.selectedMovie.title,
      customer_id: this.state.selectedCustomer.id,
      due_date: new Date(Date.now() + 700000000),
    };
    URL = 'http://localhost:3000';
    axios
      .post(
        URL +
          '/rentals/' +
          this.state.selectedMovie.title.toString() +
          '/check-out',
        params
      )
      .then(response => {
        this.setState({
          selectedMovie: undefined,
          selectedCustomer: undefined,
        });
        console.log(response);
      })
      .catch(error => {
        return console.log(error.response);
      });
  };

  displaySelected = () => {
    const { selectedMovie, selectedCustomer } = this.state;
    return (
      <div>
        {(selectedMovie || selectedCustomer) && (
          <CheckOut
            movie={selectedMovie}
            customer={selectedCustomer}
            checkOutCallBack={this.onCheckOut}
          />
        )}
      </div>
    );
  };

  addToLibrary = () => {
    console.log('inside addToLibrary')
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

        <Route 
          path="/MovieSearch" 
          render={() => (
            <MovieSearch addToLibrary={this.addToLibrary} />
          )}
        />

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
