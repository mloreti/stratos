import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import EventsContainer from './events/events_container';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <EventsContainer />
      </Provider>
    );
  }
}

export default App;
