import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = props => {
  return (
    <div className='customer-card card bg-light mb-3'>
      <h2 className='card-title'>
        {props.name} ID: {props.id}
      </h2>
      <div className='card-body'>
        <p>Number of movies checked out: {props.movies_checked_out_count}</p>
        <p>Account credit: {props.account_credit}</p>
        <button className='btn btn-outline-success' onClick={() => props.customerSelectCallback({ ...props })}>
          SELECT
        </button>
      </div>
    </div>
  );
};

Customer.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  movies_checked_out_count: PropTypes.number,
  account_credit: PropTypes.number,
  customerSelectCallback: PropTypes.func
}

export default Customer;
