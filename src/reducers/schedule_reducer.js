let defaultState = new Array(32);

const ScheduleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MAKE_SCHEDULE":
      console.log(action.events);
      return state;
      break
    case "SHUFFLE":
      return state;
      break;
    default:
      return state
  }
}

export default ScheduleReducer;
