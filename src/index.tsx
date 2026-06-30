import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ThemeContextProvider } from './src/context/ThemeContext';
import { AppThemeProvider } from './src/providers/AppThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
