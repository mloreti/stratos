let times = new Array(8).fill(false);

let defaultState = {
  fixed: times,
  schedule: times,
  options: [],
  events: []
}

const EventsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case "ADD_EVENT":

    case "ADD_NO_TIME_EVENT":
      return state;
    default:
      return state;
  }
};

export default EventsReducer;
