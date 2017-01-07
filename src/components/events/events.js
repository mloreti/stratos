import React from 'react';

class Events extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let event = {

    }
    this.props.addEvent(event);
  }
  render(){
    return(
      <h1 onClick={this.handleClick}>From Events</h1>
    )
  }
}

export default Events;
