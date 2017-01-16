import React from 'react';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {events: [], title: ""};
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = {
      title: this.state.title,
      id: Date.now()
    };
    if (event.title != '') {
      this.setState((prevState) => ({
        events: prevState.events.concat(event),
        title: ''
      }))
    }
  }

  listEvents() {
    return(
      this.state.events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
        </div>
      ))
    )
  }

  render() {
    return(
      <div>
        <h1>Add Event</h1>
        <input onChange={this.handleChange} value={this.state.title} placeholder="Title"></input>
        <button onClick={this.handleSubmit}>Add Event</button>

        <h1>Events List</h1>
        {this.listEvents()}
      </div>
    )
  }
}

export default EventsList;
