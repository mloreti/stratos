import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
