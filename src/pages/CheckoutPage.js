import React, { Component } from 'react';
import CheckoutMain from './../components/checkout/Main';
import CheckoutCart from '../components/checkout/Cart';
import Grid from 'material-ui/Grid';
import {changeStep, selectCustomer, deleteCustomer, editCustomer, addCustomer} from './../actions';
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
  onCustomerDelete: customerID => {
    dispatch(deleteCustomer(customerID));
  },
  onCustomerEdit: customer => {
    dispatch(editCustomer(customer));
  },
  onCustomerAdd: customer => {
    console.log(customer);
    // dispatch(addCustomer(customer));
  }
});

class App extends Component {
  render() {
    return (
      <section className="Checkout">
        <Grid container spacing={24}>
          <Grid item sm={8}>
            <CheckoutMain
              onCheckboxChange={this.props.onCheckboxChange}
              onStepChange={this.props.onStepChange}
              onCustomerDelete={this.props.onCustomerDelete}
              onCustomerEdit={this.props.onCustomerEdit}
              onCustomerAdd={this.props.onCustomerAdd}
              checkout={this.props.checkout}
            />
          </Grid>
          <Grid item sm={4}>
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
