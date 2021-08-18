import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './templates/Home';
import { CounterContextProvider } from './context/CounterContext/index';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
