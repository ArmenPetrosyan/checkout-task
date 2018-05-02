import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Card, { CardHeader } from 'material-ui/Card';
import Radio from 'material-ui/Radio';

const styles = theme => ({
  customerList: {
    display: 'flex',
    marginTop: 40,
    flexDirection: 'column'
  },
  card: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: '#f7fbff',
    boxShadow: 'none'
  },
  checked: {
    color: green[500]
  },
  label: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    marginRight: 10,
    maxHeight: 25
  }
});

let Payment = ({ payment, classes, isChecked, onRadioChecked }) => (
  <Card className={classes.card}>
    <CardHeader
      title={
        <label className={classes.label} htmlFor={`payment_cb_${payment.id}`}>
          {payment.logo ? (
            <img
              className={classes.logo}
              src={payment.logo}
              alt={payment.title}
            />
          ) : (
            payment.title
          )}
        </label>
      }
    />
    <Radio
      id={`payment_cb_${payment.id}`}
      checked={isChecked}
      value={`${payment.id}`}
      aria-label={payment.title}
      onClick={onRadioChecked}
      classes={{
        checked: classes.checked
      }}
    />
  </Card>
);

Payment = withStyles(styles)(Payment);

class CustomerList extends Component {
  onRadioChecked = event => {
    const targetPayment = event.target.value;

    const currentPayment = this.props.payments.filter(
      ({ id: currentID }) => currentID === Number.parseInt(targetPayment)
    )[0];
    const { serviceTax, VAT } = currentPayment;
    const subtotal = this.props.subtotal;

    this.props.onPaymentChange(targetPayment);
    this.props.onCartRecalc(serviceTax, VAT, subtotal);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.customerList}>
        {this.props.payments.map(payment => (
          <Payment
            key={payment.id}
            isChecked={
              Number.parseInt(this.props.selectedPayment) === payment.id
            }
            onRadioChecked={this.onRadioChecked}
            payment={payment}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(CustomerList);
