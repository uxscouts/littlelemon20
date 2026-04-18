// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import Provider
import { BookingProvider } from './context/BookingContext'; // Import Provider




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
     {/* <UserProvider> */}
        <h1>Header</h1>
        <App />
        <h3>Footer</h3>
     {/* </UserProvider> */}
    </BookingProvider>
  </React.StrictMode>
);
