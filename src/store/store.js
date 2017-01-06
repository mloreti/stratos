import { createStore, combineReducers, applyMiddleware } from 'redux';

const RootReducer = combineReducers({
});

const MasterMiddleware = applyMiddleware();

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
