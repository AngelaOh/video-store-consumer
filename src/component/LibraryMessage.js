import React from 'react';
import PropTypes from 'prop-types';

const LibraryMessage = ({ message }) => {
  return (
    <div className="alert alert-warning">
      <p>{message}</p>
    </div>
  );
};

export default LibraryMessage;