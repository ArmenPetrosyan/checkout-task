import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CartItems from './CartItems/CartItems';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  total: {
    marginTop: 20,
    fontWeight: 700,
    fontSize: 24,
    paddingLeft: 20
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  list: {
    paddingTop: 5,
    paddingBottom: 5
  }
});

const submitCart = () => {
  alert('Shopping Cart was successfully submitted!');
};

const CheckoutCart = props => {
  const { classes } = props;
  const { subtotal, VAT, serviceTax } = props.cart;
  return (
    <aside className="CheckoutCart">
      <div className="CheckoutCart__header">
        <Typography className={classes.root} variant="headline" component="h2">
          Shopping Cart
        </Typography>
        <Badge badgeContent={props.cart.items.length} color="primary">
          <ShoppingCart />
        </Badge>
      </div>

      <Divider light />

      <CartItems items={props.cart.items} />

      <Divider light />

      <List>
        <ListItem className={classes.list}>
          <ListItemText primary={`Subtotal: $${subtotal}`} />
        </ListItem>

        {serviceTax ? (
          <ListItem className={classes.list}>
            <ListItemText
              primary={`Payment processing services: $${serviceTax}`}
            />
          </ListItem>
        ) : null}

        {VAT ? (
          <ListItem className={classes.list}>
            <ListItemText primary={`VAT: $${VAT}`} />
          </ListItem>
        ) : null}
      </List>

      <Divider light />

      <Typography className={classes.total} variant="headline" component="h2">
        {`Total: $${props.cart.total}`}
      </Typography>
      <Button
        variant="raised"
        color="primary"
        className={classes.button}
        disabled={!props.completed}
        onClick={submitCart}
      >
        Complete order
      </Button>
    </aside>
  );
};

CheckoutCart.propTypes = {
  cart: PropTypes.object,
  completed: PropTypes.bool
};

export default withStyles(styles)(CheckoutCart);
