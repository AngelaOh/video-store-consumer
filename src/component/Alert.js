import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
  return (
    <div className={type}>
      <p>Error: {message}</p>
    </div>
  );
};

export default Alert;
