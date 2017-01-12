import React from 'react';

class NewEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'title': '', duration: '', time: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = this.state;
    this.props.addEvent(event);
    this.state = {'title': '', duration: 0, time: ''};
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
    return times.map((time, idx) => (
      <option key={time} value={idx}>{time}</option>
    ));
  }

  durations() {
    let durations = [[15,"15 minutes"], [30,"30 minutes"], [45,"45 minutes"], [60,"1 hour"], [120,"2 hours"]];
    return durations.map(time => (
      <option value={time[0]} key={time[0]}>{time[1]}</option>
    ))
  }

  render(){
    return(
      <div className="add-event">
        <h1>Add Event</h1>
        Event:
        <input onChange={this.update("title")} type="text" name="title" placeholder="Title" value={this.state.title}></input><br/>
        Duration:
        <select value={this.state.duration} onChange={this.update("duration")}>
          {this.durations()}
        </select><br/>
        Time:
        <select value={this.state.time} onChange={this.update("time")}>
          <option>N/A</option>
          {this.times()}
        </select><br/>
        <button onClick={this.handleSubmit}>Add Event</button>
      </div>
    )
  }
}

export default NewEvents;
