import React from 'react';

class EventsList extends React.Component {
  listEvents() {
    return this.props.events.map((event, idx) => (
      <h4 key={idx}>{event.title}</h4>
    ))
  }

  render() {
    return(
      <div className="events-list">
        <h1>Events List</h1>
      </div>
    )
  }
}

export default EventsList;
