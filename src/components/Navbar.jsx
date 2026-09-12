import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setProgramsOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const togglePrograms = (e) => {
    e.preventDefault();
    setProgramsOpen(!programsOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const programLinks = [
    { hash: 'residential', label: 'Residential Rehabilitation' },
    { hash: 'counselling', label: 'Counselling & Family Therapy' },
    { hash: 'medical', label: 'Medical & Psychiatric Care' },
    { hash: 'nutrition', label: 'Nutrition & Accommodation' },
    { hash: 'recreation', label: 'Recreation & Activities' },
    { hash: 'aftercare', label: 'Aftercare & Reintegration' },
    { hash: 'cost', label: 'Cost & SHA Coverage' },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs', hasDropdown: true },
    { path: '/admissions', label: 'Admissions' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Christ the Good Shepherd Wellness Centre logo"
            className="navbar__logo-img"
          />
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Christ the Good Shepherd</span>
            <span className="navbar__logo-subtitle">Wellness Centre</span>
          </div>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav */}
        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`navbar__item ${link.hasDropdown ? 'navbar__item--has-dropdown' : ''}`}
                ref={link.hasDropdown ? dropdownRef : null}
              >
                {link.hasDropdown ? (
                  <>
                    <button
                      className={`navbar__link navbar__link--dropdown ${
                        location.pathname === link.path ? 'navbar__link--active' : ''
                      }`}
                      onClick={togglePrograms}
                      aria-expanded={programsOpen}
                    >
                      {link.label}
                      <FaChevronDown
                        className={`navbar__chevron ${programsOpen ? 'navbar__chevron--open' : ''}`}
                      />
                    </button>

                    <ul
                      className={`navbar__dropdown ${programsOpen ? 'navbar__dropdown--open' : ''}`}
                    >
                      <li>
                        <Link
                          to="/programs"
                          className="navbar__dropdown-link navbar__dropdown-link--all"
                          onClick={closeMenu}
                        >
                          All Programmes
                        </Link>
                      </li>
                      {programLinks.map((program) => (
                        <li key={program.hash}>
                          <Link
                            to={`/programs#${program.hash}`}
                            className="navbar__dropdown-link"
                            onClick={closeMenu}
                          >
                            {program.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="navbar__item">
              <Link to="/donate" className="navbar__donate" onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;