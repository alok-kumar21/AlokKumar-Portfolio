import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg s" data-bs-theme="dark">
      <div className="container ">
        <NavLink className=" text-white h3 text-decoration-none p-3">
          Alok.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="burger-icon text-white navbar-toggler-icon white"></span>
        </button>
        <div className=" collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item ">
              <NavLink className="nav-link text-white">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white">Education</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white">Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
