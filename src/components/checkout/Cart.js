import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import CartItems from './CartItems';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
    margin: theme.spacing.unit,
  },
});

const CheckoutCart = (props) => {
  const { classes } = props;
  return (
    <aside className="CheckoutCart">
      <Typography className={classes.root} variant="headline" component="h2">
        Shopping Cart
      </Typography>
      <Divider light />
      <CartItems items={props.cart.items}/>
      <Divider light />
      <List>
        <ListItem>
          <ListItemText primary={`Subtotal: ${props.cart.subtotal}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Tax: ${props.cart.taxes}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Total: ${props.cart.total}`} />
        </ListItem>
      </List>
      <Button disabled variant="raised" color="primary" className={classes.button}>
        Complete order
      </Button>
    </aside>
  );
};

export default withStyles(styles)(CheckoutCart);