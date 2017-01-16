import { createStore, combineReducers } from 'redux';
import EventsReducer from '../reducers/events_reducer';
import logger from '../middleware/logger_middleware';

const RootReducer = combineReducers({
  events: EventsReducer,
});


const Store = createStore(
  RootReducer,
);

export default Store;
