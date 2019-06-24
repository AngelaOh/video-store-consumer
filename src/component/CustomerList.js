import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CustomerList = ({ customerSelectCallback }) => {
  return <h1>CUSOMTER LIST PLACE HOLDER {customerSelectCallback()} </h1>;
};

export default CustomerList;
