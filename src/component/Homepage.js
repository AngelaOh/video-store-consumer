import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';
import CheckOut from './CheckOut';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: undefined,
      selectedCustomer: undefined,
      errorMessage: undefined,
    };
  }

  handleErrorMessages = message => {
    this.setState({ errorMessage: message });
  };

  clearErrorMessages = () => {
    this.setState({ errorMessage: undefined });
  };

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
        this.clearErrorMessages();
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
        this.handleErrorMessages(error.message);
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
    console.log('inside addToLibrary');
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

        <Route
          path="/MovieSearch"
          render={() => (
            <MovieSearch
              addToLibrary={this.addToLibrary}
              errorCallback={this.handleErrorMessages}
              clearErrorCallback={this.clearErrorMessages}
            />
          )}
        />

        <Route
          path="/CustomerList"
          render={() => (
            <CustomerList
              customerSelectCallback={this.onCustomerSelect}
              errorCallback={this.handleErrorMessages}
              clearErrorCallback={this.clearErrorMessages}
            />
          )}
        />

        <Route
          path="/MovieLibrary"
          render={() => (
            <MovieLibrary
              selectMovie={this.selectMovie}
              errorCallback={this.handleErrorMessages}
              clearErrorCallback={this.clearErrorMessages}
            />
          )}
        />
      </Router>
    );
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <section>{this.displaySelected()}</section>
        <section>{this.navigation()}</section>
      </div>
    );
  }
}

export default Homepage;
