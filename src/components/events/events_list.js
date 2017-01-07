import React from 'react';

class EventsList extends React.Component {
  render() {
    return(
      <div>
        <h1>Events</h1>
        {this.props.events.map((event, idx) => (
          <div key={idx}>{event.title}</div>
        ))}
      </div>
    )
  }
}

export default EventsList;
