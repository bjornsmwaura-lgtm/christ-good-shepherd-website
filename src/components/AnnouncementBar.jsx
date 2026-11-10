import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaTimes } from 'react-icons/fa';
import './AnnouncementBar.css';

function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__content">
        <FaBullhorn className="announcement-bar__icon" />
        <span className="announcement-bar__text">
          <strong>We're Hiring!</strong> General Nurse & Psychiatric Nurse positions available.
        </span>
        <Link to="/get-involved#careers" className="announcement-bar__link">
          View Details & Apply
        </Link>
      </div>
      <button 
        className="announcement-bar__close" 
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default AnnouncementBar;