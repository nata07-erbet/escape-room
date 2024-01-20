import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Provider } from 'react-redux';
import App from './project/components/app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
