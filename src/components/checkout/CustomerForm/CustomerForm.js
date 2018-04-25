import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
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

    this.state = {
      id: this.props.id,
      name: this.props.name,
      address: this.props.address,
      paymentMethod: {
        type: this.props.paymentMethod,
        cardNumber: this.props.cardNumber,
        expDate: this.props.expDate,
        cvv: this.props.cvv
      }
    };
  }



  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  saveCustomerInfo = (event) => {
    event.persist();
    console.log(event);
    // this.props.onCustomerEdit(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="address"
          label="Address"
          className={classes.textField}
          value={this.state.address}
          onChange={this.handleChange('address')}
          margin="normal"
        />
        <TextField
          id="select-currency"
          select
          label="Payment method"
          className={classes.textField}
          value={this.state.paymentMethod.type}
          onChange={this.handleChange('paymentMethod')}
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
        </TextField>
        <p>
          Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.
        </p>
        <div className={classes.fieldSet}>
          <TextField
            id="card-number"
            label="Card number"
            className={classes.textField}
            value={this.state.paymentMethod.cardNumber}
            onChange={this.handleChange('cardNumber')}
            margin="normal"
          />
          <TextField
            id="expires"
            label="Expires"
            className={classes.textField}
            value={this.state.paymentMethod.expDate}
            onChange={this.handleChange('expires')}
            margin="normal"
          />
          <TextField
            id="cvv"
            label="CVV"
            className={classes.textField}
            value={this.state.paymentMethod.cvv}
            onChange={this.handleChange('cvv')}
            margin="normal"
          />
        </div>
        <Button
          variant="flat"
          color="primary"
          className={classes.button}
          onClick={this.saveCustomerInfo}
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

export default withStyles(styles)(CustomerForm);
