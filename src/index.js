import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/App/App';
import { CurrentUserProvider } from './context/CurrentUserContext';
import { InfoToolTipProvider } from './context/InfoToolTipProvider';
import { MoviesProvider } from './context/MoviesContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <MoviesProvider>
          <InfoToolTipProvider>
            <App />
          </InfoToolTipProvider>
        </MoviesProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
