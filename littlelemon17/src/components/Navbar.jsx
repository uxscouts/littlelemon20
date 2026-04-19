
import { NavLink } from "react-router-dom";


function Navbar(){
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/reservation">Reservation</NavLink>
    </nav>
  );
};
export default Navbar;