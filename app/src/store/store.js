import { createStore, combineReducers, applyMiddleware } from 'redux';
import EventsReducer from '../reducers/events_reducer';
import SessionReducer from '../reducers/session_reducer';
import EventsMiddleware from '../middleware/events_middleware';

const RootReducer = combineReducers({
  events: EventsReducer,
});

const RootMiddleware = applyMiddleware(
  EventsMiddleware
)


const store = createStore(
  RootReducer,
);

export default store;
