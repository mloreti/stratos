import React from 'react';

class NewEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'title': '',
      duration: '',
      time: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkSchedule(event) {
    let time = event.time.split(" ");
    console.log(event);
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = this.state;
    this.checkSchedule(event);
    this.state = {'title': '', duration: 0, time: ''};
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  getTimes(start, stop, time) {
    let times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];
    return times.map((time, idx) => (
      <option key={idx} value={idx}>{time}</option>
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
          {this.getTimes()}
        </select><br/>
        <button onClick={this.handleSubmit}>Add Event</button>
      </div>
    )
  }
}

export default NewEvents;
