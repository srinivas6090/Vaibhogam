import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import {BrowserRouter} from 'react-router-dom';
import RootRouter from './RootRouter';

import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  </React.StrictMode>
);
