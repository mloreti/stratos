import { createStore, combineReducers } from 'redux';
import EventsReducer from '../reducers/events_reducer';

const RootReducer = combineReducers({
  events: EventsReducer,
});


const store = createStore(
  RootReducer,
);

export default store;
