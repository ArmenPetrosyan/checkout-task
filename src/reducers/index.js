import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  cart: cartReducer,
  form: formReducer
});

export default rootReducer;
