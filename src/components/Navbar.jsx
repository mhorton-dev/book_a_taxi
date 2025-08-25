import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ title }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">{title}</h1>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
