import React from 'react';
import PropTypes from 'prop-types';
import './CheckOut.css';
import Alert from './Alert';

const CheckOut = ({ customer, movie, checkOutCallBack }) => {
  return (
    <div className="checkoutContainer jumbotron jumbotron-fluid">
      {customer && displayCustomer(customer)}
      {movie && displayMovie(movie)}
      {customer && movie && (
        <button className="btn btn-primary" onClick={checkOutCallBack}>
          Check Out Movie
        </button>
      )}
    </div>
  );
};

const displayCustomer = customer => {
  return (
    <article className="container lead">
      <h2 className="content">Customer: {customer.name} </h2>
      <p className="content">ID: {customer.id} </p>
      <p className="content">Account Credit: {customer.account_credit} </p>
    </article>
  );
};

const displayMovie = movie => {
  return (
    <article className="container my-4">
      <h2 className="content">Movie: {movie.title} </h2>
      <p className="content">ID: {movie.id} </p>
      <img className="sml-img" src={movie.image_url} alt="" />
    </article>
  );
};

CheckOut.propTypes = {
  movie: PropTypes.string,
  customer: PropTypes.string,
  checkOutCallback: PropTypes.func,
};

export default CheckOut;
