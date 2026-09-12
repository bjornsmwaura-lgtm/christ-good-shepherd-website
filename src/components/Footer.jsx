import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1: Brand + Mission */}
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <img src={logo} alt="Christ the Good Shepherd Wellness Centre logo" className="footer__logo-img"/>
            <div className="footer__logo-text">
              <span className="footer__logo-title">Christ the Good Shepherd</span>
              <span className="footer__logo-subtitle">Wellness Centre</span>
            </div>
          </div>
          <p className="footer__mission">
            Restoring hope, renewing minds, and rebuilding lives through
            Christ-centred care, counseling, and community.
          </p>
          <p className="footer__verse">
            "He restores my soul." — Psalm 23:3
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/about" className="footer__link">About Us</Link></li>
            <li><Link to="/programs" className="footer__link">Programs</Link></li>
            <li><Link to="/admissions" className="footer__link">Admissions</Link></li>
           <li><Link to="/get-involved" className="footer__link">Get Involved</Link></li>
            <li><Link to="/donate" className="footer__link">Donate</Link></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div className="footer__col">
          <h4 className="footer__heading">Our Programs</h4>
          <ul className="footer__list">
            <li><Link to="/programs" className="footer__link">Rehabilitation</Link></li>
            <li><Link to="/programs" className="footer__link">Counseling</Link></li>
            <li><Link to="/programs" className="footer__link">Spiritual Care</Link></li>
            <li><Link to="/programs" className="footer__link">Skills Training</Link></li>
            <li><Link to="/programs" className="footer__link">Family Support</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact Us</h4>
          <ul className="footer__list footer__list--contact">
            <li>
              <FaPhone className="footer__icon" />
              <a href="tel:+254791770653" className="footer__link">
                +254 791 770 653
              </a>
            </li>
            <li>
              <FaEnvelope className="footer__icon" />
              <a href="mailto:cgsrehab@gmail.com" className="footer__link">
                cgsrehab@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer__icon" />
              <span className="footer__text">
                P.O. Box 288-10100<br />Nyeri, Kenya
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="footer__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer__social"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/254791770653"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer__social"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="footer__social"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} Christ the Good Shepherd Wellness Centre. All rights reserved.
        </p>
        <p className="footer__tagline">
          Designed and developed by Bjornsmwaura Productions
        </p>
      </div>
    </footer>
  );
}

export default Footer;