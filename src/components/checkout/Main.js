import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  subtitle: {
    marginTop: 40
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const CheckoutMain = (props) => {
  const {classes} = props;

  return (
    <main className="CheckoutMain">
      <Typography className={classes.root} variant="headline" component="h2">
        Checkout
      </Typography>
      <Divider light />
      <Typography className={classes.subtitle} variant="headline" component="h3">
        Customer account
      </Typography>
    </main>
  )
};

export default withStyles(styles)(CheckoutMain);