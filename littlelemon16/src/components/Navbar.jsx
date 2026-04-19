import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
      <NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
export default Navbar;