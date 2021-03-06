import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import Customer from './Customer';

const styles = theme => ({
  customerList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 40,
    alignItems: 'center'
  }
});

class CustomerList extends Component {
  constructor() {
    super();
    this.state = {
      checkedRadio: '',
      anchorEl: null
    };
  }

  onRadioChecked = event => {
    const targetCustomer = event.target.value;
    this.props.onCustomerChange(targetCustomer);
    this.setState({
      checkedRadio: targetCustomer
    });
  };

  onCustomerMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onCustomerMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  onEditButtonClick = () => {
    const customerID = this.state.anchorEl.getAttribute('aria-owns');
    this.props.openModal(customerID, 'edit');
    this.onCustomerMenuClose();
  };

  onDeleteButtonClick = () => {
    const customerID = this.state.anchorEl.getAttribute('aria-owns');
    this.props.onCustomerDelete(customerID);
    this.onCustomerMenuClose();
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.customerList}>
        {this.props.customers.map(customer => (
          <Customer
            key={customer.id}
            onCustomerMenuClick={this.onCustomerMenuClick}
            onCustomerMenuClose={this.onCustomerMenuClose}
            onDeleteButtonClick={this.onDeleteButtonClick}
            onRadioChecked={this.onRadioChecked}
            anchorEl={anchorEl}
            customer={customer}
            isChecked={this.props.selectedCustomer === customer.id}
          />
        ))}
        <Menu
          id={'menu'}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.onCustomerMenuClose}
        >
          <MenuItem onClick={this.onEditButtonClick}>Edit</MenuItem>
          <MenuItem onClick={this.onDeleteButtonClick}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(CustomerList);
