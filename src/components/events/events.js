import React from 'react';

class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'title': '', duration: 0, time: null}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let event = {

    }
    this.props.addEvent(event);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  times() {
    let times = this.getTimes("AM").concat(this.getTimes("PM"));
    return times
  }

  getTimes(time) {
    let times = [];
    for(let i = 1; i < 13; i++){
      if (i < 10) {
        times.push(`0${i}:00 ${time}`)
      } else {
        times.push(`${i}:00 ${time}`)
      }
    }
    return times;
  }

  render(){
    return(
      <div>
        <h1>Add Event</h1>
        <input onChange={this.update("title")} type="text" name="title" placeholder="Title"></input>
        Duration (in minutes)<input onChange={this.update("duration")} type="number" name="duration" placeholder="Duration"></input>
      Time <select onChange={this.update("time")}>
        <option>N/A</option>
        {this.times().map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      </div>
    )
  }
}

export default Events;
