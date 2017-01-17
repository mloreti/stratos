import { createStore, combineReducers } from 'redux';
import EventsReducer from '../reducers/events_reducer';

const RootReducer = combineReducers({
  events: EventsReducer,
});


const Store = createStore(
  RootReducer,
);

export default Store;
