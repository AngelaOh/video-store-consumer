import React from 'react';
import PropTypes from 'prop-types';

const Customer = props => {
  return (
    <div>
      <h2>
        {props.name} ID: {props.id}
      </h2>
      <p>Number of movies checked out: {props.movies_checked_out_count}</p>
      <p>Account credit: {props.account_credit}</p>
      <button onClick={() => props.customerSelectCallback({ ...props })}>
        SELECT
      </button>
      <br />
      -----------------------------------------
    </div>
  );
};

export default Customer;
