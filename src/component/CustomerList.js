import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          customerSelectCallback={props.customerSelectCallback}
        />
      );
    });
  };

  componentDidMount() {
    getCusomters();
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
    return <h1>CUSOMTER LIST PLACE HOLDER {customerSelectCallback()} </h1>;
  }
}

export default CustomerList;
