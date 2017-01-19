import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from './store/store';
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  window.store = Store;

  const root = document.getElementById('root')
  ReactDOM.render(<App store={Store} />, root);
})
