const EventsMiddleware = store => next => action => {
  switch(action.type){
    default:
      next(action);
  }
};

export default EventsMiddleware;
