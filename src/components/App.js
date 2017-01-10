import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import NewEventsContainer from './events/new_events_container';
import EventsListContainer from './events/events_list_container';
import './App.scss'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <NewEventsContainer />
          <EventsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
