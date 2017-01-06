import { createStore, combineReducers, applyMiddleware } from 'redux';
import EventsReducer from '../reducers/events_reducer';
import EventsMiddleware from '../middleware/events_middleware';

const RootReducer = combineReducers({
  events: EventsReducer
});

const MasterMiddleware = applyMiddleware(EventsMiddleware);

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
