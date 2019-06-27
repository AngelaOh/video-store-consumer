import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './MovieLibrary';
import MovieSearch from './MovieSearch';
import CustomerList from './CustomerList';
import CheckOut from './CheckOut';
import Alert from './Alert';
import LibraryMessage from './LibraryMessage'
import Welcome from './Welcome';
import axios from 'axios';
import './Homepage.css';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: undefined,
      selectedCustomer: undefined,
      errorMessage: undefined,
      addToLibraryMessage: undefined,
      showWelcome: true,
    };
  }

  hideWelcome = () => {
    this.setState({ showWelcome: false });
  };

  handleErrorMessages = message => {
    this.setState({ errorMessage: message });
  };

  clearErrorMessages = () => {
    this.setState({ errorMessage: undefined });
  };

  handleAddToLibrary = (message) => {
    this.setState({addToLibraryMessage: message})
  }

  clearAddToLibrary = () => {
    this.setState({addToLibraryMessage: undefined})
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

  addToLibrary = movie => {
    const params = {
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      image_url: movie.image_url.substring(31, movie.image_url.length),
      inventory: 10,
      external_id: movie.external_id,
    };

    URL = 'http://localhost:3000';
    axios
      .post(URL + '/movies?', params)
      .then(response => {
        console.log('successful post add to library', response);
        this.handleAddToLibrary(`${movie.title} has been added to library`)
      })
      .catch(error => {
        return console.log(error.response);
      });
    this.clearAddToLibrary()
  };

  navigation = () => {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            o'Hip Video Store
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/MovieSearch">
                  Search Movies
                </Link>{' '}
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/MovieLibrary">
                  Movie Library
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/CustomerList">
                  Customer List
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {this.state.errorMessage && (
          <Alert message={this.state.errorMessage} type="alert alert-danger" />
        )}
        {this.state.addToLibraryMessage && (
          <LibraryMessage message={this.state.addToLibraryMessage} />
        )}
        <section>{this.displaySelected()}</section>

        <Route
          path="/MovieSearch"
          render={() => (
            <MovieSearch
              addToLibrary={this.addToLibrary}
              errorCallback={this.handleErrorMessages}
              clearErrorCallback={this.clearErrorMessages}
              addLibraryCallback={this.handleAddToLibrary}
              hideLibraryCallback={this.clearAddToLibrary}
              hideWelcomeCallback={this.hideWelcome}
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
              addLibraryCallback={this.handleAddToLibrary}
              hideLibraryCallback={this.clearAddToLibrary}
              hideWelcomeCallback={this.hideWelcome}
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
              addLibraryCallback={this.handleAddToLibrary}
              hideLibraryCallback={this.clearAddToLibrary}
              hideWelcomeCallback={this.hideWelcome}
            />
          )}
        />
      </Router>
    );
  };

  render() {
    const { errorMessage, showWelcome } = this.state;
    return (
      <div>
        <section>{this.navigation()}</section>
        {showWelcome && <Welcome />}
      </div>
    );
  }
}

export default Homepage;
