import { makeSchedule } from '../actions/schedule_actions';

const EventsMiddleware = store => next => action => {
  switch(action.type){
    case "RECEIVE_EVENT":
      store.dispatch(makeSchedule(store.getState().events))
      next(action);
    default:
      next(action);
  }
};

export default EventsMiddleware;
