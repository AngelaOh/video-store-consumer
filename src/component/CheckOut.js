import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: props.customer,
      movie: props.movie,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.customer !== state.customer || props.movie !== state.movie) {
      return { customer: props.customer, movie: props.movie };
    } else return null;
  }

  displayCustomer = () => {};
  displayMovie = () => {};

  render() {
    return (
      <div>
        TEST
        {console.log(this.state)};
      </div>
    );
  }
}

CheckOut.propTypes = {};

export default CheckOut;
