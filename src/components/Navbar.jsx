import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const programsRef = useRef(null);
  const involvedRef = useRef(null);
  const location = useLocation();

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProgramsOpen(false);
    setInvolvedOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const togglePrograms = (e) => {
    e.preventDefault();
    setProgramsOpen(!programsOpen);
    setInvolvedOpen(false);
  };

  const toggleInvolved = (e) => {
    e.preventDefault();
    setInvolvedOpen(!involvedOpen);
    setProgramsOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setProgramsOpen(false);
      }
      if (involvedRef.current && !involvedRef.current.contains(event.target)) {
        setInvolvedOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    closeAllMenus();
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

  const involvedLinks = [
    { hash: '', label: 'Overview' },
    { hash: 'volunteer', label: 'Volunteer' },
    { hash: 'internship', label: 'Internship' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeAllMenus}>
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
            {/* Home */}
            <li className="navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={closeAllMenus}
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="navbar__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={closeAllMenus}
              >
                About Us
              </NavLink>
            </li>

            {/* Programs dropdown */}
            <li
              className="navbar__item navbar__item--has-dropdown"
              ref={programsRef}
            >
              <button
                className={`navbar__link navbar__link--dropdown ${
                  location.pathname === '/programs' ? 'navbar__link--active' : ''
                }`}
                onClick={togglePrograms}
                aria-expanded={programsOpen}
              >
                Programs
                <FaChevronDown
                  className={`navbar__chevron ${
                    programsOpen ? 'navbar__chevron--open' : ''
                  }`}
                />
              </button>

              <ul
                className={`navbar__dropdown ${
                  programsOpen ? 'navbar__dropdown--open' : ''
                }`}
              >
                <li>
                  <Link
                    to="/programs"
                    className="navbar__dropdown-link navbar__dropdown-link--all"
                    onClick={closeAllMenus}
                  >
                    All Programmes
                  </Link>
                </li>
                {programLinks.map((program) => (
                  <li key={program.hash}>
                    <Link
                      to={`/programs#${program.hash}`}
                      className="navbar__dropdown-link"
                      onClick={closeAllMenus}
                    >
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Admissions */}
            <li className="navbar__item">
              <NavLink
                to="/admissions"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={closeAllMenus}
              >
                Admissions
              </NavLink>
            </li>

            {/* Get Involved dropdown */}
            <li
              className="navbar__item navbar__item--has-dropdown"
              ref={involvedRef}
            >
              <button
                className={`navbar__link navbar__link--dropdown ${
                  location.pathname === '/get-involved'
                    ? 'navbar__link--active'
                    : ''
                }`}
                onClick={toggleInvolved}
                aria-expanded={involvedOpen}
              >
                Get Involved
                <FaChevronDown
                  className={`navbar__chevron ${
                    involvedOpen ? 'navbar__chevron--open' : ''
                  }`}
                />
              </button>

              <ul
                className={`navbar__dropdown ${
                  involvedOpen ? 'navbar__dropdown--open' : ''
                }`}
              >
                {involvedLinks.map((link) => (
                  <li key={link.hash || 'overview'}>
                    <Link
                      to={`/get-involved${link.hash ? `#${link.hash}` : ''}`}
                      className={`navbar__dropdown-link ${
                        link.hash === '' ? 'navbar__dropdown-link--all' : ''
                      }`}
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact */}
            <li className="navbar__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={closeAllMenus}
              >
                Contact
              </NavLink>
            </li>

            {/* Donate */}
            <li className="navbar__item">
              <Link to="/donate" className="navbar__donate" onClick={closeAllMenus}>
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