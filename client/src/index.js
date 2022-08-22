import React from 'react';
import ReactDOM from 'react-dom/client';
// import './compo.css'
import './index.css';
import App from './App';
// import Sidebar2 from './Sidebar2';
// import Sider from './Sider';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
