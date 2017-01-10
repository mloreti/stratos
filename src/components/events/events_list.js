import React from 'react';

class EventsList extends React.Component {
  render() {
    return(
      <div className="events-list">
        <h1>Events</h1>
        {this.props.events.map((event, idx) => (
          <div key={idx}>
            <div className="event-top-row">
              <h3>{event.title}</h3>
              <h3>{event.time}</h3>
            </div>
            <div className="event-bottom-row">
              <h4>{event.duration}</h4>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default EventsList;
