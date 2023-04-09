import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//  For reactstrap and bootstrap 5 call Start.
import 'bootstrap/dist/css/bootstrap.min.css';
//  For reactstrap and bootstrap 5 call End.
import './style.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
