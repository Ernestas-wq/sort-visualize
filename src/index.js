import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/dist/css/index.min.css';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
