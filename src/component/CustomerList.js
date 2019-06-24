import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [],
    };
  }
  customerCollection = () => {
    return this.state.customerList.map(customer => {
      return (
        <Customer
          {...customer}
          customerSelectCallback={this.props.customerSelectCallback}
        />
      );
    });
  };

  componentDidMount() {
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
        console.log(customerList);
        this.setState({
          customerList: customerList,
        });
        console.log('state!', this.state);
      })
      .catch(error => {
        return console.log(error.message);
      });
  };

  render() {
    return <div>{this.customerCollection()}</div>;
  }
}

export default CustomerList;
