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

export const selectPayment = paymentID => ({
  type: 'SELECT_PAYMENT',
  payload: paymentID
});

export const cartRecalc = (serviceTax, VAT, subtotal) => ({
  type: 'CART_RECALC',
  payload: applyPaymentChange(serviceTax, VAT, subtotal)
});

export const editCustomer = customer => ({
  type: 'EDIT_CUSTOMER',
  payload: customer
});

const applyPaymentChange = (serviceTax, VAT, subtotal) => {
  let taxes = subtotal * VAT;
  let service = subtotal * serviceTax;

  return {
    VAT: taxes,
    serviceTax: service,
    total: subtotal + taxes + service
  }
};

