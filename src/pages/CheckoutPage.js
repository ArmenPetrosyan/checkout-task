import React, { Component } from 'react';
import CheckoutMain from './../components/checkout/Main';
import CheckoutCart from '../components/checkout/Cart';
import {changeStep, selectCustomer, deleteCustomer, editCustomer} from './../actions';
import { connect } from 'react-redux';
import './CheckoutPage.css';

const mapStateToProps = state => ({
  checkout: state.checkout,
  cart: state.cart,
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  onStepChange: step => {
    dispatch(changeStep(step = 2));
  },
  onCheckboxChange: customerID => {
    dispatch(selectCustomer(customerID));
  },
  onCustomerDelete: customerName => {
    dispatch(deleteCustomer(customerName));
  },
  onCustomerEdit: customer => {
    dispatch(editCustomer(customer));
  }
});

class App extends Component {
  render() {
    return (
      <section className="Checkout">
        <CheckoutMain
          onCheckboxChange={this.props.onCheckboxChange}
          onStepChange={this.props.onStepChange}
          onCustomerDelete={this.props.onCustomerDelete}
          onCustomerEdit={this.props.onCustomerEdit}
          customers={this.props.checkout.customers}
          step={this.props.checkout.step}
          selectedCustomer={this.props.checkout.selected}
        />
        <CheckoutCart
          cart={this.props.cart}
          completed={this.props.checkout.completed}
        />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
