import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import App from './components/App';
import store from './store/store';
import routes from './routes';
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;

  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  );
})
