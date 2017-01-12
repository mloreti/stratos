import React from 'react';

class EventsList extends React.Component {
  getTimes() {
    let times = [];
    for(let i = 0; i < 12; i++) {
      let hour = i + 8;
      if (hour % 12 == 0) {
        times.push(`${12}:00`)
      }
      else if (hour < 10 || hour % 12 < 10) {
        times.push(`0${hour % 12}:00`)
      }
    }
    return times.map((time, idx) => (
      <h4 key={idx}>{time}</h4>
    ))
  }

  render() {
    let noTime = this.props.events.noTime;
    return(
      <div className="events-list">
        <h1>Events</h1>
        {this.getTimes()}
      </div>
    )
  }
}

export default EventsList;
