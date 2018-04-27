import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  fieldSet: {
    display: 'flex'
  },
  button: {
    marginTop: 40
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 4,
  },
});

const currencies = [
  {
    value: 'CREDIT_CARD',
    label: 'Credit card',
  },
  {
    value: 'PAYPAL',
    label: 'PayPal',
  },
  {
    value: 'STRIPE',
    label: 'Stripe',
  }
];

class CustomerForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange = name => event => {
    // this.setState({
    //   [name]: event.target.value,
    // });
  };

  render() {
    const { classes, handleSubmit, customer } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Field
          name="name"
          label="Name"
          className={classes.textField}
          value={customer.name}
          onChange={this.handleChange('name')}
          margin="normal"
          component={TextField}
        />
        <Field
          name="address"
          label="Address"
          className={classes.textField}
          value={customer.address}
          onChange={this.handleChange('address')}
          margin="normal"
          component={TextField}
        />
        <Field
          name="paymentMethod"
          select
          label="Payment method"
          className={classes.textField}
          value={customer.paymentMethod.type}
          onChange={this.handleChange('paymentMethod.type')}
          component={TextField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your payment method"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <p>
          Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.
        </p>
        <div className={classes.fieldSet}>
          <Field
            name="cardNumber"
            label="Card number"
            className={classes.textField}
            value={customer.paymentMethod.cardNumber}
            onChange={this.handleChange('paymentMethod.cardNumber')}
            margin="normal"
            component={TextField}
          />
          <Field
            name="expires"
            label="Expires"
            className={classes.textField}
            value={customer.paymentMethod.expDate}
            onChange={this.handleChange('paymentMethod.expires')}
            margin="normal"
            component={TextField}
          />
          <Field
            name="cvv"
            label="CVV"
            className={classes.textField}
            value={customer.paymentMethod.cvv}
            onChange={this.handleChange('paymentMethod.cvv')}
            margin="normal"
            component={TextField}
          />
        </div>
        <Button
          variant="flat"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Save details
        </Button>
      </form>

    );
  }
}

CustomerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

CustomerForm.defaultProps = {
  id: 0,
  name: 'John Doe',
  address: '5th Street',
  paymentMethod: {
    type: 'Credit card',
    cardNumber: '0000000000000',
    expDate: '10/22',
    cvv: '000'
  }
};

export default reduxForm({
  form: 'customer'
})(withStyles(styles)(CustomerForm));
