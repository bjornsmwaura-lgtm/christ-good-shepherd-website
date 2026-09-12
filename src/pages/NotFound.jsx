import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaArrowRight } from 'react-icons/fa';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__inner">
        <div className="notfound__code">404</div>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__text">
          We couldn't find the page you were looking for. It may have been
          moved, renamed, or might not exist.
        </p>
        <p className="notfound__verse">
          "Your word is a lamp to my feet and a light to my path." — Psalm 119:105
        </p>
        <div className="notfound__buttons">
          <Link to="/" className="btn btn--primary">
            <FaHome /> Back to Home
          </Link>
          <Link to="/contact" className="btn btn--outline-light">
            <FaPhone /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;