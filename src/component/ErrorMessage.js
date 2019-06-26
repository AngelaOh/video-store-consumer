import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
