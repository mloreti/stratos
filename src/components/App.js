import React, { Component } from 'react';
import Store from '../store/store';
import EventsList from './events/events_list';
import './App.scss'

class App extends Component {
  render() {
    return (
      <EventsList />
    );
  }
}

export default App;
