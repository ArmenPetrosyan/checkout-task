import * as actions from './index';

describe('actions', () => {
  it('should create an action to add customer', () => {
    const customer = {
      name: 'Test',
      address: 'Main street'
    };

    const expectedAction = {
      type: 'ADD_CUSTOMER',
      payload: customer
    };

    expect(actions.addCustomer(customer)).toEqual(expectedAction);
  });

  it('should create an action to delete customer', () => {
    const customerID = 1;

    const expectedAction = {
      type: 'DELETE_CUSTOMER',
      payload: customerID
    };

    expect(actions.deleteCustomer(customerID)).toEqual(expectedAction);
  });
});
