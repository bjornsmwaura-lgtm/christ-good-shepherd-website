import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  
  const programsRef = useRef(null);
  const involvedRef = useRef(null);
  const exploreRef = useRef(null);
  const location = useLocation();

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProgramsOpen(false);
    setInvolvedOpen(false);
    setExploreOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const togglePrograms = (e) => {
    e.preventDefault();
    setProgramsOpen(!programsOpen);
    setInvolvedOpen(false);
    setExploreOpen(false);
  };

  const toggleInvolved = (e) => {
    e.preventDefault();
    setInvolvedOpen(!involvedOpen);
    setProgramsOpen(false);
    setExploreOpen(false);
  };

  const toggleExplore = (e) => {
    e.preventDefault();
    setExploreOpen(!exploreOpen);
    setProgramsOpen(false);
    setInvolvedOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programsRef.current && !programsRef.current.contains(event.target)) setProgramsOpen(false);
      if (involvedRef.current && !involvedRef.current.contains(event.target)) setInvolvedOpen(false);
      if (exploreRef.current && !exploreRef.current.contains(event.target)) setExploreOpen(false);
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

  // Helper to check if any of the explore links are active
  const isExploreActive = ['/about', '/gallery', '/contact'].includes(location.pathname);

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
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeAllMenus}
              >
                Home
              </NavLink>
            </li>

            {/* Programs dropdown */}
            <li className="navbar__item navbar__item--has-dropdown" ref={programsRef}>
              <button
                className={`navbar__link navbar__link--dropdown ${
                  location.pathname === '/programs' ? 'navbar__link--active' : ''
                }`}
                onClick={togglePrograms}
                aria-expanded={programsOpen}
              >
                Programs
                <FaChevronDown className={`navbar__chevron ${programsOpen ? 'navbar__chevron--open' : ''}`} />
              </button>

              <ul className={`navbar__dropdown ${programsOpen ? 'navbar__dropdown--open' : ''}`}>
                <li>
                  <Link to="/programs" className="navbar__dropdown-link navbar__dropdown-link--all" onClick={closeAllMenus}>
                    All Programmes
                  </Link>
                </li>
                {programLinks.map((program) => (
                  <li key={program.hash}>
                    <Link to={`/programs#${program.hash}`} className="navbar__dropdown-link" onClick={closeAllMenus}>
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
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeAllMenus}
              >
                Admissions
              </NavLink>
            </li>

            {/* Get Involved dropdown */}
            <li className="navbar__item navbar__item--has-dropdown" ref={involvedRef}>
              <button
                className={`navbar__link navbar__link--dropdown ${
                  location.pathname === '/get-involved' ? 'navbar__link--active' : ''
                }`}
                onClick={toggleInvolved}
                aria-expanded={involvedOpen}
              >
                Get Involved
                <FaChevronDown className={`navbar__chevron ${involvedOpen ? 'navbar__chevron--open' : ''}`} />
              </button>

              <ul className={`navbar__dropdown ${involvedOpen ? 'navbar__dropdown--open' : ''}`}>
                {involvedLinks.map((link) => (
                  <li key={link.hash || 'overview'}>
                    <Link
                      to={`/get-involved${link.hash ? `#${link.hash}` : ''}`}
                      className={`navbar__dropdown-link ${link.hash === '' ? 'navbar__dropdown-link--all' : ''}`}
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Explore dropdown (About, Gallery, Contact) */}
            <li className="navbar__item navbar__item--has-dropdown" ref={exploreRef}>
              <button
                className={`navbar__link navbar__link--dropdown ${
                  isExploreActive ? 'navbar__link--active' : ''
                }`}
                onClick={toggleExplore}
                aria-expanded={exploreOpen}
              >
                Explore
                <FaChevronDown className={`navbar__chevron ${exploreOpen ? 'navbar__chevron--open' : ''}`} />
              </button>

              <ul className={`navbar__dropdown ${exploreOpen ? 'navbar__dropdown--open' : ''}`}>
                <li>
                  <Link to="/about" className="navbar__dropdown-link" onClick={closeAllMenus}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="navbar__dropdown-link" onClick={closeAllMenus}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navbar__dropdown-link" onClick={closeAllMenus}>
                    Contact Us
                  </Link>
                </li>
              </ul>
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