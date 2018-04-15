const initialState = {
  customers: [
    {
      name      : 'John Doe',
      address   : '1st Main street, New York, USA',
      paymentMethod: {
        type        : 'Credit card',
        cardNumber  : '1111222233334444',
        expDate     : '09/22',
        cvv         : '000'
      }
    }
  ]
};

const checkoutReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_CUSTOMER':
    case 'EDIT_CUSTOMER':
    case 'REMOVE_CUSTOMER':
    default:
      return state;
  }

};

export default checkoutReducer;