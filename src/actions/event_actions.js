export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const addNoTimeEvent = event => ({
  type: "ADD_NO_TIME_EVENT",
  event
});

export const newSchedule = schedule => ({
  type: "NEW_SCHEDULE",
  schedule
})
