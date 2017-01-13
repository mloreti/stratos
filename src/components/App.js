import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import EventsListContainer from './events/events_list_container';
import './App.scss'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <EventsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
