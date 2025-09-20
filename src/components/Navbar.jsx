import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  'nav-link' + (isActive ? ' active' : '');

export default function Navbar() {
  return (
    <nav className="nav">

      <div className="links">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/education" className={linkClass}>Education</NavLink>
        <NavLink to="/services" className={linkClass}>Services</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  );
}
