import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ text, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>Alert: {text}</p>
    </div>
  );
};

export default Alert;
