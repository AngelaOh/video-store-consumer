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
      })
      .catch(error => {
        return console.log(error.message);
      });
  };

  render() {
    return <div>{this.customerCollection()}</div>;
  }
}

CustomerList.propTypes = {
  customerSelectCallback: PropTypes.func
}

export default CustomerList;
