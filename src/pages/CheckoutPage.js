import React, { Component } from 'react';
import CheckoutMain from '../components/checkout/Checkout';
import CheckoutCart from '../components/checkout/Cart';
import Grid from 'material-ui/Grid';
import {
  changeStep,
  selectCustomer,
  deleteCustomer,
  editCustomer,
  addCustomer,
  selectPayment,
  cartRecalc
} from './../actions';
import { connect } from 'react-redux';
import './CheckoutPage.css';

const mapStateToProps = state => ({
  checkout: state.checkout,
  cart: state.cart,
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  onStepChange: step => {
    dispatch(changeStep(step));
  },
  onCustomerChange: customerID => {
    dispatch(selectCustomer(customerID));
  },
  onPaymentChange: paymentID => {
    dispatch(selectPayment(paymentID));
  },
  onCartRecalc: (serviceTax, VAT, subtotal) => {
    dispatch(cartRecalc(serviceTax, VAT, subtotal));
  },
  onCustomerDelete: customerID => {
    dispatch(deleteCustomer(customerID));
  },
  onCustomerEdit: customer => {
    dispatch(editCustomer(customer));
  },
  onCustomerAdd: customer => {
    dispatch(addCustomer(customer));
  }
});

class App extends Component {
  render() {
    return (
      <section className="Checkout">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={7} lg={8}>
            <CheckoutMain
              onCustomerChange={this.props.onCustomerChange}
              onPaymentChange={this.props.onPaymentChange}
              onCartRecalc={this.props.onCartRecalc}
              onStepChange={this.props.onStepChange}
              onCustomerDelete={this.props.onCustomerDelete}
              onCustomerEdit={this.props.onCustomerEdit}
              onCustomerAdd={this.props.onCustomerAdd}
              checkout={this.props.checkout}
              subtotal={this.props.cart.subtotal}
            />
          </Grid>
          <Grid item xs={12} sm={5} lg={4}>
            <CheckoutCart
              cart={this.props.cart}
              completed={this.props.checkout.completed}
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
