import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import green from 'material-ui/colors/green';
import Radio from 'material-ui/Radio';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  checked: {
    color: green[500],
  },
  card: {
    maxWidth: 400,
    marginRight: 20,
    display: 'flex',
    alignItems: 'center'
  }
});

class Customer extends Component {
  render () {
    const { classes, anchorEl } = this.props;
    const { id:customerID, name:customerName, paymentMethod } = this.props.customer;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
            >
              {customerName.slice(0,2).toUpperCase()}
            </Avatar>
          }
          action={
            <div>
              <IconButton
                aria-owns={anchorEl ? customerName : null}
                aria-haspopup="true"
                onClick={this.props.onCustomerMenuClick}
              >
                <MoreVertIcon />

              </IconButton>
            </div>
          }
          title={customerName}
          subheader={paymentMethod.type}
        />
        <Radio
          checked={this.props.isChecked}
          onClick={this.props.onRadioChecked}
          value={customerID}
          aria-label={customerName}
          classes={{
            checked: classes.checked,
          }}
        />
      </Card>
    )
  }
};

export default withStyles(styles)(Customer);