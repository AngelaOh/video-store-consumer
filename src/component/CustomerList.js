import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';
import './CustomerList.css';

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [],
    };
  }
  customerCollection = () => {
    return this.state.customerList.map((customer, i) => {
      return (
        <Customer
          {...customer}
          key={i}
          customerSelectCallback={this.props.customerSelectCallback}
        />
      );
    });
  };

  componentDidMount() {
    this.props.clearErrorCallback();
    this.props.hideWelcomeCallback();
    this.getCustomers();
  }

  getCustomers = () => {
    URL = 'http://localhost:3000';
    axios
      .get(URL + '/customers')
      .then(response => {
        const customerList = response.data.map(customer => {
          return customer;
        });
        this.setState({
          customerList: customerList,
        });

        if (customerList.length === 0) {
          const errorMessage = 'No customers in system.';
          this.props.errorCallback(errorMessage);
        }
      })
      .catch(error => {
        console.log(error.message);
        this.props.errorCallback(error.message);
      });
  };

  render() {
    return (
      <div className="customer-container">{this.customerCollection()}</div>
    );
  }
}

CustomerList.propTypes = {
  customerSelectCallback: PropTypes.func,
};

export default CustomerList;
