
/*
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservation';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
};

export default AppRoutes;
*/


import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";


const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        {/* Outlet renders the matched child route */}
        <Outlet />
      </div>
    </>
  );
};

// Define the Routing configuration
const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<AppRoutes />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    )
}

export default RouterConfig;
