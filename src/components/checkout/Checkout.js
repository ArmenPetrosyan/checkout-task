import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Modal from 'material-ui/Modal';
import CustomerList from './CustomerList';
import PaymentList from './PaymentList';
import CustomerForm from './CustomerForm/CustomerForm';
import * as steps from './../../steps';

var shortid = require('shortid');

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  subtitle: {
    marginTop: 40
  },
  button: {
    marginTop: 40
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  flexContainer: {
    display: 'flex'
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class CheckoutMain extends Component {
  constructor() {
    super();

    this.state = {
      popupOpened: false,
      formType: null,
      currentCustomerID: null
    };
  }

  handleOpen = (customerID, formType = 'create') => {
    this.setState({
      popupOpened: true,
      formType,
      currentCustomerID: customerID
    });
  };

  handleClose = () => {
    this.setState({ popupOpened: false });
  };

  onAddCustomer = () => {
    const newID = shortid.generate();
    this.handleOpen(newID);
  };

  customerFormSubmit = values => {
    const { currentCustomerID } = this.state;
    const customer = {
      ...values,
      id: currentCustomerID
    };

    console.log(values, customer);

    if (this.state.formType === 'create') {
      console.log(`Create user with ID ${currentCustomerID}`, values);
      this.props.onCustomerAdd(customer);
    } else {
      // edit customer
      console.log(`Edit user with ID ${currentCustomerID}`, values);
      this.props.onCustomerEdit(customer);
    }
    this.handleClose();
  };

  getCustomer = customerID => {
    const defaultCustomer = {
      id: customerID,
      name: 'Garry Smith',
      address: '1st Main street, New York, USA',
      paymentType: 'PayPal',
      cardNumber: '1111222233334444',
      expDate: '09/22',
      cvv: '000'
    };
    return this.state.formType !== 'create'
      ? this.props.checkout.customers.filter(({ id }) => id === customerID)[0]
      : defaultCustomer;
  };

  continuePayment = () => {
    if (this.props.checkout.selectedCustomer) {
      this.props.onStepChange(steps.PAYMENT_SELECTION);
    } else {
      alert('Sorry, select the customer before!');
    }
  };

  returnToAccount = () => {
    this.props.onStepChange(steps.CUSTOMER_SELECTION);
  };

  render() {
    const { classes } = this.props;
    const { currentCustomerID } = this.state;
    const stepLabels = ['01 Customer account', '02 Payments selection'];

    return (
      <main className="CheckoutMain">
        <Typography className={classes.root} variant="headline" component="h2">
          Checkout
        </Typography>

        <Divider light />

        <Stepper activeStep={this.props.checkout.step} alternativeLabel>
          {stepLabels.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {this.props.checkout.step === steps.CUSTOMER_SELECTION ? (
          <div className={classes}>
            <CustomerList
              customers={this.props.checkout.customers}
              selectedCustomer={this.props.checkout.selectedCustomer}
              onCustomerDelete={this.props.onCustomerDelete}
              onCustomerChange={this.props.onCustomerChange}
              openModal={this.handleOpen}
            />

            <Button
              variant="fab"
              color="secondary"
              aria-label="add"
              className={classes.button}
              onClick={this.onAddCustomer}
            >
              <AddIcon />
            </Button>
            <Modal open={this.state.popupOpened} onClose={this.handleClose}>
              <div style={getModalStyle()} className={classes.paper}>
                <CustomerForm
                  onCustomerEdit={this.props.onCustomerEdit}
                  onSubmit={this.customerFormSubmit}
                  initialValues={this.getCustomer(currentCustomerID)}
                />
              </div>
            </Modal>

            <br />

            <Button
              variant="flat"
              color="primary"
              className={classes.button}
              onClick={this.continuePayment}
            >
              Continue to payment
            </Button>
          </div>
        ) : (
          <div>
            <PaymentList
              subtotal={this.props.subtotal}
              onPaymentChange={this.props.onPaymentChange}
              onCartRecalc={this.props.onCartRecalc}
              selectedPayment={this.props.checkout.selectedPayment}
              payments={this.props.checkout.payments}
            />
            <Button
              variant="flat"
              color="primary"
              className={classes.button}
              onClick={this.returnToAccount}
            >
              <ChevronLeft />
              Return to customer account
            </Button>
          </div>
        )}
      </main>
    );
  }
}

export default withStyles(styles)(CheckoutMain);
