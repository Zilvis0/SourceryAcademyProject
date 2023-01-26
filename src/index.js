import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/global.scss';
import App from '@components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
