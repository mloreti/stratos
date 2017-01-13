import { makeSchedule } from '../actions/schedule_actions';

const EventsMiddleware = store => next => action => {
  switch(action.type){
    default:
      next(action);
  }
};

export default EventsMiddleware;
