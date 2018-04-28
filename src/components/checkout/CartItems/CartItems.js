import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import './CartItems.css';

const Item = ({title, brand, price, img}) => (
  <ListItem>
    <Avatar src={img} />
    <ListItemText secondary={brand} >
      <div>{title}</div>
      <div className="CartItem__price">{`$${price}`}</div>
    </ListItemText>
  </ListItem>
);

const CartItems = (props) => {
  return(
    <List>
      {props.items.map(({title, brand, price, img}) => (<Item key={title} title={title} brand={brand} price={price} img={img} />))}
    </List>
  )
};

export default CartItems;