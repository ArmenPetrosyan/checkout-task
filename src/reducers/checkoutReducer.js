import * as steps from './../steps';
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
  payments: [
    {
      id: 1,
      title: 'PayPal',
      serviceTax: 0.01,
      VAT : 0.05
    },
    {
      id: 2,
      title: 'Visa',
      serviceTax: 0.01,
      VAT : 0
    },
    {
      id: 3,
      title: 'Balance',
      serviceTax: 0,
      VAT : 0
    },
  ],
  step: steps.PAYMENT_SELECTION,
  completed: false,
  selectedCustomer: 0,
  selectedPayment: 0,
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
        customers: state.customers.filter(customer => customer.id != action.payload),
        selected: 0
      }
    }
    case 'SELECT_CUSTOMER': {
      return {
        ...state,
        selectedCustomer: action.payload
      }
    }
    case 'SELECT_PAYMENT': {
      return {
        ...state,
        selectedPayment: action.payload
      }
    }
    case 'CHANGE_STEP': {
      return {
        ...state,
        step: action.payload,
        completed: action.payload == steps.PAYMENT_DONE
      };
    }
    default:
      return state;
  }

};

export default checkoutReducer;