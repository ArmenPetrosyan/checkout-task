import { createStore } from 'redux';
import rootReducer from '../reducers';

const devTools = '__REDUX_DEVTOOLS_EXTENSION__';

export const composeEnhancers = () => {
  if (process.env.NODE_ENV !== 'production' || window || window[devTools]) {
    return window[devTools]();
  }
};

export const configureStore = () => createStore(rootReducer, composeEnhancers());

export default configureStore();
