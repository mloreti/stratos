const EventsReducer = (state = {noTime: [], withTime: []}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case "RECEIVE_EVENT":
      let newState = Object.assign({}, state);
      if (action.event.time != "") {
        newState.withTime.push(action.event);
      } else {
        newState.noTime.push(action.event);
      }
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;
