import React from 'react';
import PropTypes from 'prop-types';

const Customer = props => {
  console.log(props);
  return (
    <div>
      <h2>
        {props.name} ID: {props.id}
      </h2>
      <p>Number of movies checked out: {props.movies_checked_out_count}</p>
      <p>Account credit: {props.account_credit}</p>
      -----------------------------------------
    </div>
  );
};

export default Customer;
