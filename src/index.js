import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store'; // <-- 1. IMPORT THE STORE
import { Provider } from 'react-redux'; // <-- 2. IMPORT THE PROVIDER

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. WRAP APP IN THE PROVIDER */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);