const ScheduleReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "MAKE_SCHEDULE":
      console.log("Making schedule");
      return state;
    case "SHUFFLE":
      return state;
    default:
      return state
  }
}

export default ScheduleReducer;
