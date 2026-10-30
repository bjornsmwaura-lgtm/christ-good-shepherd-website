import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaHome,
  FaSeedling,
  FaTools,
  FaComments,
  FaCross,
  FaUsers,
  FaUserFriends,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from 'react-icons/fa';
import './Gallery.css';

// ============================================================
// IMPORT YOUR PHOTOS HERE
// Update these filenames to match what you saved in src/assets/images/gallery/
// ============================================================
// Facility (4)
import fac1 from '../assets/images/gallery/facility1.jpeg';
import fac2 from '../assets/images/gallery/facility2.jpeg';
import fac3 from '../assets/images/gallery/facility3.jpeg';
import fac4 from '../assets/images/gallery/facility4.jpeg';
// Activities (4)
import act1 from '../assets/images/gallery/client1.jpeg';
import act2 from '../assets/images/gallery/harvest.jpeg';
import act3 from '../assets/images/gallery/cow.jpeg';
import act4 from '../assets/images/gallery/muheria1.jpeg';
// Occupational Therapy (4) 
import ot1 from '../assets/images/gallery/shamba2.jpeg';
import ot2 from '../assets/images/gallery/kuku.jpeg';
import ot3 from '../assets/images/gallery/rabbit.jpeg';
import ot4 from '../assets/images/gallery/goat.jpeg';
// Counselling (4)
import coun1 from '../assets/images/gallery/staff3.jpeg';
import coun2 from '../assets/images/gallery/recreation1.jpeg';
import coun3 from '../assets/images/gallery/counselling.jpg';
import coun4 from '../assets/images/gallery/client3.jpeg';
// Spiritual (4)
import spi1 from '../assets/images/gallery/bishop1.jpeg';
import spi2 from '../assets/images/gallery/spiritual.jpeg';
import spi3 from '../assets/images/gallery/spiritual2.jpeg';
import spi4 from '../assets/images/gallery/spiritual3.jpeg';
// Community (4)
import com1 from '../assets/images/gallery/community2.jpeg';
import com2 from '../assets/images/gallery/community1.jpeg';
import com3 from '../assets/images/gallery/client6.jpeg';
import com4 from '../assets/images/gallery/community4.jpeg';
// Team (4)
import team1 from '../assets/images/gallery/staff1.jpeg';
import team2 from '../assets/images/gallery/staff2.jpeg';
import team3 from '../assets/images/gallery/staff3.jpeg';
import team4 from '../assets/images/gallery/staff4.jpeg';

function Gallery() {
  const [lightboxData, setLightboxData] = useState(null);

  // ============================================================
  // GALLERY DATA - Grouped by Section
  // ============================================================
  const sections = useMemo(() => [
    {
      id: 'facility',
      title: 'Our Facility',
      icon: <FaHome />,
      description: 'A safe, serene, and dignified environment for healing.',
      photos: [
        { image: fac1, title: 'Main Building', caption: 'Our residential facility' },
        { image: fac2, title: 'Gardens', caption: 'Peaceful grounds for reflection' },
        { image: fac3, title: 'Dining Hall', caption: 'Shared meals and fellowship' },
        { image: fac4, title: 'Resident Rooms', caption: 'Comfortable accommodation' },
      ],
    },
    {
      id: 'activities',
      title: 'Recreational Activities',
      icon: <FaSeedling />,
      description: 'Building teamwork, discipline, and physical wellbeing.',
      photos: [
        { image: act1, title: 'Sports & Games', caption: 'Building teamwork' },
        { image: act2, title: 'Group Sessions', caption: 'Learning together' },
        { image: act3, title: 'Outdoor Recreation', caption: 'Fresh air and activity' },
        { image: act4, title: 'Farming', caption: 'Therapeutic farming programme' },
      ],
    },
    {
      id: 'occupational',
      title: 'Occupational Therapy',
      icon: <FaTools />,
      description: 'Practical skills training for sustainable independence.',
      photos: [
        { image: ot1, title: 'Skills Training', caption: 'Learning practical skills' },
        { image: ot2, title: 'Carpentry', caption: 'Vocational training' },
        { image: ot3, title: 'Tailoring', caption: 'Creative workshops' },
        { image: ot4, title: 'Agriculture', caption: 'Sustainable farming skills' },
      ],
    },
    {
      id: 'counselling',
      title: 'Counselling & Therapy',
      icon: <FaComments />,
      description: 'Professional care for the mind and heart.',
      photos: [
        { image: coun1, title: 'Individual Counselling', caption: 'One-on-one support' },
        { image: coun2, title: 'Group Therapy', caption: 'Healing in community' },
        { image: coun3, title: 'Family Therapy', caption: 'Rebuilding relationships' },
        { image: coun4, title: 'Psychiatric Care', caption: 'Medical support' },
      ],
    },
    {
      id: 'spiritual',
      title: 'Spiritual Care',
      icon: <FaCross />,
      description: 'Nurturing a personal relationship with Christ.',
      photos: [
        { image: spi1, title: 'Chapel', caption: 'A place of prayer' },
        { image: spi2, title: 'Daily Devotions', caption: 'Morning and evening prayer' },
        { image: spi3, title: 'Bible Study', caption: 'Growing in the Word' },
        { image: spi4, title: 'Pastoral Support', caption: 'Guidance and encouragement' },
      ],
    },
    {
      id: 'community',
      title: 'Community & Reintegration',
      icon: <FaUsers />,
      description: 'Rebuilding relationships and returning to society.',
      photos: [
        { image: com1, title: 'Graduation Day', caption: 'Celebrating milestones' },
        { image: com2, title: 'Family Visits', caption: 'Reconnecting with loved ones' },
        { image: com3, title: 'Outreach', caption: 'Extending our mission' },
        { image: com4, title: 'Aftercare', caption: 'Ongoing support' },
      ],
    },
    {
      id: 'team',
      title: 'Our Team',
      icon: <FaUserFriends />,
      description: 'The dedicated professionals who make it all possible.',
      photos: [
        { image: team1, title: 'Clinical Team', caption: 'Professional care' },
        { image: team2, title: 'Counsellors', caption: 'Compassionate support' },
        { image: team3, title: 'Support Staff', caption: 'Every role matters' },
        { image: team4, title: 'Leadership', caption: 'Guiding the mission' },
      ],
    },
  ], []);

  // ===== Lightbox controls =====
  const openLightbox = (sectionIndex, photoIndex) => {
    setLightboxData({ sectionIndex, photoIndex });
  };

  const closeLightbox = () => setLightboxData(null);

  const showPrev = useCallback(() => {
    if (!lightboxData) return;
    const { sectionIndex, photoIndex } = lightboxData;
    const sectionPhotos = sections[sectionIndex].photos;
    const newIndex = (photoIndex - 1 + sectionPhotos.length) % sectionPhotos.length;
    setLightboxData({ sectionIndex, photoIndex: newIndex });
  }, [lightboxData, sections]);

  const showNext = useCallback(() => {
    if (!lightboxData) return;
    const { sectionIndex, photoIndex } = lightboxData;
    const sectionPhotos = sections[sectionIndex].photos;
    const newIndex = (photoIndex + 1) % sectionPhotos.length;
    setLightboxData({ sectionIndex, photoIndex: newIndex });
  }, [lightboxData, sections]);

  // ===== Keyboard navigation =====
  useEffect(() => {
    if (!lightboxData) return;
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
  }, [lightboxData, showPrev, showNext]);

  const currentPhoto = lightboxData
    ? sections[lightboxData.sectionIndex].photos[lightboxData.photoIndex]
    : null;

  return (
    <div className="gallery">
      <Helmet>
        <title>Gallery · Christ the Good Shepherd Wellness Centre</title>
        <meta
          name="description"
          content="Glimpses of healing, community, faith, and renewal at Christ the Good Shepherd Wellness & Rehabilitation Centre in Nyeri, Kenya."
        />
      </Helmet>

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--gallery">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Gallery</span>
          <h1 className="page-hero__title">Life at the Centre</h1>
          <p className="page-hero__subtitle">
            Glimpses of healing, community, faith, and renewal — from the
            grounds, the therapy rooms, and the people who make this place a home.
          </p>
        </div>
      </section>

      {/* ===== GALLERY SECTIONS ===== */}
      <section className="section gallery-section">
        <div className="container">
          {sections.map((section, sectionIndex) => (
            <div key={section.id} className="gallery-group">
              <div className="gallery-group__header">
                <div className="gallery-group__icon">{section.icon}</div>
                <div>
                  <h2 className="gallery-group__title">{section.title}</h2>
                  <p className="gallery-group__desc">{section.description}</p>
                </div>
              </div>

              <div className="gallery__grid">
                {section.photos.map((photo, photoIndex) => (
                  <button
                    key={photoIndex}
                    className="gallery__tile"
                    onClick={() => openLightbox(sectionIndex, photoIndex)}
                    aria-label={`View ${photo.title}`}
                  >
                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="gallery__tile-img"
                      />
                    ) : (
                      <div className={`gallery__tile-placeholder gallery__tile-placeholder--${section.id}`}>
                        <div className="gallery__tile-icon">{section.icon}</div>
                        <span className="gallery__tile-label">{photo.title}</span>
                        <span className="gallery__tile-caption">Photo coming soon</span>
                      </div>
                    )}
                    <div className="gallery__tile-overlay">
                      <span className="gallery__tile-overlay-title">{photo.title}</span>
                      <span className="gallery__tile-overlay-caption">{photo.caption}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
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
      {currentPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            {currentPhoto.image ? (
              <img src={currentPhoto.image} alt={currentPhoto.title} className="lightbox__img" />
            ) : (
              <div className={`lightbox__placeholder lightbox__placeholder--${sections[lightboxData.sectionIndex].id}`}>
                <div className="lightbox__placeholder-icon">
                  {sections[lightboxData.sectionIndex].icon}
                </div>
                <h3 className="lightbox__placeholder-title">{currentPhoto.title}</h3>
                <p className="lightbox__placeholder-caption">Photo coming soon</p>
              </div>
            )}
            <div className="lightbox__info">
              <h3 className="lightbox__title">{currentPhoto.title}</h3>
              <p className="lightbox__caption">{currentPhoto.caption}</p>
              <span className="lightbox__counter">
                {lightboxData.photoIndex + 1} / {sections[lightboxData.sectionIndex].photos.length}
              </span>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
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