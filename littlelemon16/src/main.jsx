// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import Provider
import { BookingProvider } from './context/BookingContext'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './AppRoutes';
import RouterConfig from "./AppRoutes";
import Navbar from './components/Navbar';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <BrowserRouter>
      {/*
        <Navbar />
        <AppRoutes />
        */}
        <RouterConfig />
      </BrowserRouter>
        <App />
        <h3>Footer</h3>
    </BookingProvider>
  </React.StrictMode>
);

/*

import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}
export default App;
*/