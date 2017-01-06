const EventsReducer = (state = [], action) => {
  switch(action.type) {
    case "RECEIVE_EVENT":
      return state.concat(action.event);
    default:
      return state;
  }
};

export default EventsReducer;
