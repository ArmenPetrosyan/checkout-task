var shortid = require('shortid');

const initialState = {
  customers: [
    {
      id            : shortid.generate(),
      name          : 'John Doe',
      address       : '1st Main street, New York, USA',
      paymentType   : 'Credit card',
      cardNumber    : '1111222233334444',
      expDate       : '09/22',
      cvv           : '000'
    },
    {
      id            : shortid.generate(),
      name          : 'Mike Stain',
      address       : '1st Main street, New York, USA',
      paymentType   : 'Credit card',
      cardNumber    : '1111222233334444',
      expDate       : '09/22',
      cvv           : '000'
    },
  ],
  step: 0,
  completed: false,
  selected: 0,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER': {
      return {
        ...state,
        customers: [...state.customers, action.payload]
      }
    }
    case 'EDIT_CUSTOMER': {
      return {
        ...state,
        customers: state.customers.map(customer => (customer.id == action.payload.id) ? {...customer, ...action.payload} : customer)
      }
    }
    case 'DELETE_CUSTOMER':{
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id != action.payload)
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