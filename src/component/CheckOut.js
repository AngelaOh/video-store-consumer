import React from 'react';
import PropTypes from 'prop-types';

const CheckOut = ({ customer, movie, checkOutCallBack }) => {
  return (
    <div>
      {customer && displayCustomer(customer)}
      {movie && displayMovie(movie)}
      {customer && movie && (
        <button onClick={() => checkOutCallBack()}>Check Out Movie</button>
      )}
    </div>
  );
};

const displayCustomer = customer => {
  return (
    <article>
      <h2>Name: {customer.name} </h2>
      <p>ID: {customer.id} </p>
      <p>Account Credit: {customer.account_credit} </p>
    </article>
  );
};

const displayMovie = movie => {
  return (
    <article>
      <h2>Title: {movie.title} </h2>
      <p>ID: {movie.id} </p>
      <img src={movie.image_url} alt="" />
    </article>
  );
};

CheckOut.propTypes = {
  movie: PropTypes.string,
  customer: PropTypes.string,
  checkOutCallback: PropTypes.func,
};

export default CheckOut;
