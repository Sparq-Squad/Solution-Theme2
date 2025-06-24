import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AlertProvider } from './context/AlertContext';
import { DashboardProvider } from './context/DashboardContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </AlertProvider>
  </StrictMode>
);
