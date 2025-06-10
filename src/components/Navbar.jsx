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
              <a href="#about" className="nav-link text-white">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link text-white">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-white">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-white">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
