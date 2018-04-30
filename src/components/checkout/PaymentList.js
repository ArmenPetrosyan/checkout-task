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
    alignItems: 'center'
  },
  checked: {
    color: green[500],
  }
});

let Payment = ({payment, classes, isChecked, onRadioChecked}) => (

  <Card className={classes.card}>
    <CardHeader
      title={payment.title}
    />
    <Radio
      checked={isChecked}
      value={`${payment.id}`}
      aria-label={payment.title}
      onClick={onRadioChecked}
      classes={{
        checked: classes.checked,
      }}
    />
  </Card>
);

Payment = withStyles(styles)(Payment);

class CustomerList extends Component {
  constructor() {
    super();
    this.state = {
      checkedRadio: '',
    }
  }

  onRadioChecked = event => {
    const targetPayment = event.target.value;
    this.props.onPaymentChange(targetPayment);
    console.log(targetPayment);
    this.setState({
      checkedRadio: targetPayment
    });
  };

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.customerList}>
        {
          this.props.payments.map(
            (payment) => (
              <Payment
                key={payment.id}
                value={`${payment.id}`}
                isChecked={this.props.selectedPayment == payment.id}
                onRadioChecked={this.onRadioChecked}
                payment={payment}
              />
            )
          )
        }
      </div>
    )
  }
};

export default withStyles(styles)(CustomerList);