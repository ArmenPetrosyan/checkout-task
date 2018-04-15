import React, { Component } from 'react';
import CheckoutMain from './../components/checkout/Main';
import CheckoutCart from '../components/checkout/Cart';
import { connect } from 'react-redux';
import './CheckoutPage.css';

class App extends Component {
  render() {
    return (
      <section className="Checkout">
        <CheckoutMain customers={this.props.checkout.customers} />
        <CheckoutCart cart={this.props.cart}/>
      </section>
    );
  }
}

export default connect(state => ({
  checkout: state.checkout,
  cart: state.cart,
  form: state.form,
}))(App);
