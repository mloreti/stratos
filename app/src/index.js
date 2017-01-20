import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';

import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})
