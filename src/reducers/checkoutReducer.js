const initialState = {
  customers: [
    {
      id            : 0,
      name          : 'John Doe',
      address       : '1st Main street, New York, USA',
      paymentMethod : {
        type        : 'Credit card',
        cardNumber  : '1111222233334444',
        expDate     : '09/22',
        cvv         : '000'
      }
    },
    {
      id            : 1,
      name          : 'Mike Stain',
      address       : '1st Main street, New York, USA',
      paymentMethod : {
        type        : 'PayPal',
        cardNumber  : '1111222233334444',
        expDate     : '09/22',
        cvv         : '000'
      }
    },
  ],
  step: 1,
  completed: false,
  selected: 0
};

const checkoutReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_CUSTOMER':
    case 'EDIT_CUSTOMER': {
      return {
        ...state,
        customers: state.customers.map(customer => (customer.id == action.payload.id) ? Object.assign({}, customer, action.payload) : customer)
      }
    }
    case 'DELETE_CUSTOMER':{
      return {
        ...state,
        customers: state.customers.filter(customer => customer.name !== action.payload)
      }
    }
    case 'SELECT_CUSTOMER': {
      return {
        ...state,
        selected: action.payload
      }
    }
    case 'CHANGE_STEP': {
      return {
        ...state,
        step: action.payload,
        completed: action.payload >= 2
      };
    }
    default:
      return state;
  }

};

export default checkoutReducer;