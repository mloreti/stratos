import { createStore, combineReducers, applyMiddleware } from 'redux';
import EventsReducer from '../reducers/events_reducer';
import ScheduleReducer from '../reducers/schedule_reducer';
import EventsMiddleware from '../middleware/events_middleware';
import logger from '../middleware/logger_middleware';

const RootReducer = combineReducers({
  events: EventsReducer,
  schedule: ScheduleReducer
});

const MasterMiddleware = applyMiddleware(EventsMiddleware, logger);

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
