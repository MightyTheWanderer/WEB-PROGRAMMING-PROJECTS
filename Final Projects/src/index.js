import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// whole app starts from here
// we are rending App component to div root
// App component is wrapper of all other components
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);