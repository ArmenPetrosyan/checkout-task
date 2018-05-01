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
    width: 200
  },
  fieldSet: {
    display: 'flex'
  },
  button: {
    marginTop: 40
  },
  menu: {
    width: 200
  },
  paper: {
    padding: theme.spacing.unit * 4
  }
});

const paymentTypes = [
  {
    value: 'CREDIT_CARD',
    label: 'Credit card'
  },
  {
    value: 'PAYPAL',
    label: 'PayPal'
  },
  {
    value: 'STRIPE',
    label: 'Stripe'
  }
];

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleSubmit } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Field
          name="name"
          label="Name"
          className={classes.textField}
          margin="normal"
          component={TextField}
        />
        <Field
          name="address"
          label="Address"
          className={classes.textField}
          margin="normal"
          component={TextField}
        />
        <Field
          name="paymentType"
          label="Payment method"
          select
          className={classes.textField}
          component={TextField}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your payment method"
          margin="normal"
        >
          {paymentTypes.map(option => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <p>
          Safe money transfer using your bank account. Visa, Maestro, Discover,
          American Express.
        </p>
        <div className={classes.fieldSet}>
          <Field
            name="cardNumber"
            type="number"
            label="Card number"
            className={classes.textField}
            margin="normal"
            component={TextField}
          />
          <Field
            name="expDate"
            label="Expires"
            className={classes.textField}
            margin="normal"
            component={TextField}
          />
          <Field
            name="cvv"
            type="number"
            label="CVV"
            className={classes.textField}
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
  classes: PropTypes.object.isRequired
};

CustomerForm = reduxForm({
  form: 'customer'
})(withStyles(styles)(CustomerForm));

export default CustomerForm;
