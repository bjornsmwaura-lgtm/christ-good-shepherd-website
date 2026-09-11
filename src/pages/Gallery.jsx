import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaSeedling,
  FaCross,
  FaComments,
  FaUsers,
  FaUserFriends,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaArrowRight,
} from 'react-icons/fa';
import './Gallery.css';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // ============================================================
  // GALLERY DATA
  // To add a real photo:
  //   1. Place the file in src/assets/images/gallery/
  //   2. Import it at the top: import imgName from '...'
  //   3. Set `image: imgName` in the item below
  // If `image` is null, a placeholder tile is shown instead.
  // ============================================================

  const galleryItems = [
    // --- Facility ---
    { id: 1,  category: 'facility',   title: 'Main Building',            caption: 'Our residential facility',        image: null },
    { id: 2,  category: 'facility',   title: 'Resident Rooms',           caption: 'Comfortable accommodation',       image: null },
    { id: 3,  category: 'facility',   title: 'Dining Hall',              caption: 'Shared meals and fellowship',     image: null },
    { id: 4,  category: 'facility',   title: 'Gardens & Grounds',        caption: 'A serene environment for healing', image: null },

    // --- Activities ---
    { id: 5,  category: 'activities', title: 'Farm Activities',          caption: 'Therapeutic farming programme',   image: null },
    { id: 6,  category: 'activities', title: 'Sports & Games',           caption: 'Building teamwork and discipline', image: null },
    { id: 7,  category: 'activities', title: 'Group Sessions',           caption: 'Learning and growing together',   image: null },
    { id: 8,  category: 'activities', title: 'Outdoor Recreation',       caption: 'Fresh air and positive activity', image: null },

    // --- Spiritual ---
    { id: 9,  category: 'spiritual',  title: 'Chapel',                   caption: 'A place of prayer and peace',     image: null },
    { id: 10, category: 'spiritual',  title: 'Daily Devotions',          caption: 'Morning and evening prayer',      image: null },
    { id: 11, category: 'spiritual',  title: 'Bible Study',              caption: 'Growing in the Word',             image: null },

    // --- Counselling ---
    { id: 12, category: 'counselling', title: 'Individual Counselling',  caption: 'One-on-one support',              image: null },
    { id: 13, category: 'counselling', title: 'Group Therapy',           caption: 'Healing in community',            image: null },
    { id: 14, category: 'counselling', title: 'Family Therapy',          caption: 'Rebuilding relationships',        image: null },

    // --- Community ---
    { id: 15, category: 'community',  title: 'Graduation Day',           caption: 'Celebrating milestones',          image: null },
    { id: 16, category: 'community',  title: 'Family Visits',            caption: 'Reconnecting with loved ones',    image: null },
    { id: 17, category: 'community',  title: 'Community Outreach',       caption: 'Extending our mission',           image: null },

    // --- Team ---
    { id: 18, category: 'team',       title: 'Our Staff',                caption: 'A dedicated multidisciplinary team', image: null },
    { id: 19, category: 'team',       title: 'Clinical Team',            caption: 'Professional and compassionate care', image: null },
    { id: 20, category: 'team',       title: 'Support Staff',            caption: 'Every role matters',              image: null },
  ];

  const categories = [
    { key: 'all',         label: 'All Photos',   icon: <FaImage /> },
    { key: 'facility',    label: 'Facility',     icon: <FaHome /> },
    { key: 'activities',  label: 'Activities',   icon: <FaSeedling /> },
    { key: 'spiritual',   label: 'Spiritual',    icon: <FaCross /> },
    { key: 'counselling', label: 'Counselling',  icon: <FaComments /> },
    { key: 'community',   label: 'Community',    icon: <FaUsers /> },
    { key: 'team',        label: 'Our Team',     icon: <FaUserFriends /> },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // ===== Lightbox controls =====
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  // ===== Keyboard navigation =====
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, showPrev, showNext]);

  // Reset lightbox when category changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="gallery">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--gallery">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Gallery</span>
          <h1 className="page-hero__title">Life at the Centre</h1>
          <p className="page-hero__subtitle">
            Glimpses of healing, community, faith, and renewal from the
            grounds, the chapel, the therapy rooms, and the people who make
            this place a home.
          </p>
        </div>
      </section>

      {/* ===== FILTER TABS ===== */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery__tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`gallery__tab ${
                  activeCategory === cat.key ? 'gallery__tab--active' : ''
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span className="gallery__tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* ===== GRID ===== */}
          <div className="gallery__grid">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                className="gallery__tile"
                onClick={() => openLightbox(index)}
                aria-label={`View ${item.title}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery__tile-img"
                  />
                ) : (
                  <div className={`gallery__tile-placeholder gallery__tile-placeholder--${item.category}`}>
                    <div className="gallery__tile-icon">
                      {categories.find((c) => c.key === item.category)?.icon}
                    </div>
                    <span className="gallery__tile-label">{item.title}</span>
                    <span className="gallery__tile-caption">{item.caption}</span>
                  </div>
                )}
                <div className="gallery__tile-overlay">
                  <span className="gallery__tile-overlay-title">{item.title}</span>
                  <span className="gallery__tile-overlay-caption">{item.caption}</span>
                </div>
              </button>
            ))}
          </div>

          <p className="gallery__note">
            📸 Real photographs will be added soon. Placeholders are shown
            in the meantime.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section gallery-cta">
        <div className="container">
          <div className="gallery-cta__inner">
            <h2 className="gallery-cta__title">Come and see for yourself</h2>
            <p className="gallery-cta__text">
              We warmly welcome visitors, families, and referring partners.
              Reach out to arrange a visit.
            </p>
            <div className="gallery-cta__buttons">
              <Link to="/contact" className="btn btn--primary">
                Contact Us <FaArrowRight />
              </Link>
              <Link to="/admissions" className="btn btn--outline-light">
                Admissions Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {currentItem && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.image ? (
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="lightbox__img"
              />
            ) : (
              <div className={`lightbox__placeholder lightbox__placeholder--${currentItem.category}`}>
                <div className="lightbox__placeholder-icon">
                  {categories.find((c) => c.key === currentItem.category)?.icon}
                </div>
                <h3 className="lightbox__placeholder-title">{currentItem.title}</h3>
                <p className="lightbox__placeholder-caption">
                  {currentItem.caption}
                </p>
                <p className="lightbox__placeholder-note">
                  Photo coming soon
                </p>
              </div>
            )}

            <div className="lightbox__info">
              <h3 className="lightbox__title">{currentItem.title}</h3>
              <p className="lightbox__caption">{currentItem.caption}</p>
              <span className="lightbox__counter">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;