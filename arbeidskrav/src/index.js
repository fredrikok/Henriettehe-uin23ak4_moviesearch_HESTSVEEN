import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Endre litt på indexen?? Er det nødvendig med strictmode? Dobbeltsjekk dette :) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


