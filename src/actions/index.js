export const changeStep = step => ({
  type: 'CHANGE_STEP',
  payload: step
});

export const addCustomer = customer => ({
  type: 'ADD_CUSTOMER',
  payload: customer
});

export const deleteCustomer = customerID => ({
  type: 'DELETE_CUSTOMER',
  payload: customerID
});

export const selectCustomer = customerID => ({
  type: 'SELECT_CUSTOMER',
  payload: customerID
});

export const editCustomer = customer => ({
  type: 'EDIT_CUSTOMER',
  payload: customer
});

