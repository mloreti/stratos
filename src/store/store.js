import { createStore, combineReducers, applyMiddleware } from 'redux';
import EventsReducer from '../reducers/events_reducer';
import EventsMiddleware from '../middleware/events_middleware';
import logger from '../middleware/logger_middleware';

const RootReducer = combineReducers({
  events: EventsReducer,
});

const MasterMiddleware = applyMiddleware(EventsMiddleware, logger);

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
