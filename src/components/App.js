import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import EventsContainer from './events/events_container';
import EventsListContainer from './events/events_list_container';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <EventsContainer />
          <EventsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
