import { useState, useEffect } from 'react';
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from 'react-icons/fa';
import './Testimonials.css';

function Testimonials() {
  // ============================================================
  // TESTIMONIAL DATA
  // These are placeholder quotes — replace with real testimonials
  // once you have written consent from each person quoted.
  // Use initials or "Anonymous" for privacy where preferred.
  // ============================================================

  const testimonials = [
    {
      quote:
        'The Centre gave me a second chance at life. I came in broken and hopeless, and I left with dignity, purpose, and a relationship with Christ that changed everything.',
      name: 'A. M.',
      role: 'Programme Graduate',
      year: '2023',
      initials: 'AM',
    },
    {
      quote:
        'I did not just watch my son recover; I watched him come back to us. The family therapy sessions rebuilt trust that I thought was lost forever. We are grateful beyond words.',
      name: 'M. W.',
      role: 'Parent of a Graduate',
      year: '2022',
      initials: 'MW',
    },
    {
      quote:
        'The team here treats you like a person, not a problem. That dignity is what gave me the strength to keep going, one day at a time.',
      name: 'J. K.',
      role: 'Programme Graduate',
      year: '2024',
      initials: 'JK',
    },
    {
      quote:
        'I refer clients here with complete confidence. The clinical care is professional, the spiritual support is genuine, and the follow-up after discharge is exceptional.',
      name: 'Dr. S. N.',
      role: 'Referring Health Professional',
      year: '2024',
      initials: 'SN',
    },
    {
      quote:
        'After 9 months of aftercare, I am still sober, still working, and still rebuilding my family. This place did not just treat my addiction, it restored my life.',
      name: 'P. G.',
      role: 'Programme Graduate',
      year: '2023',
      initials: 'PG',
    },
    {
      quote:
        'What touched me most was the prayers. Every morning, the whole team prayed for us by name. That love carried me through my darkest days.',
      name: 'L. N.',
      role: 'Programme Graduate',
      year: '2024',
      initials: 'LN',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Adjust visible count based on screen width
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 700) setVisibleCount(1);
      else if (window.innerWidth < 1100) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  // Get the current visible testimonials (wraps around)
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (currentIndex + i) % testimonials.length;
    return { ...testimonials[idx], originalIndex: idx };
  });

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Stories of Hope</span>
          <h2 className="section__title">Voices from our community</h2>
          <p className="section__subtitle">
            Recovery is personal — and so are the stories. These are a few of
            the voices from our graduates, families, and partners who have
            walked this journey with us.
          </p>
        </div>

        <div className="testimonials__slider">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={showPrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className={`testimonials__grid testimonials__grid--${visibleCount}`}>
            {visibleTestimonials.map((item) => (
              <article
                key={item.originalIndex}
                className="testimonial-card"
              >
                <FaQuoteLeft className="testimonial-card__quote-icon" />
                <p className="testimonial-card__quote">{item.quote}</p>

                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">
                    {item.initials}
                  </div>
                  <div className="testimonial-card__meta">
                    <span className="testimonial-card__name">{item.name}</span>
                    <span className="testimonial-card__role">
                      {item.role} · {item.year}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={showNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${
                i === currentIndex ? 'testimonials__dot--active' : ''
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Share your story CTA */}
        <div className="testimonials__share">
          <FaHeart className="testimonials__share-icon" />
          <p className="testimonials__share-text">
            Has your life been touched by the Centre? We would be honoured to
            hear your story.
          </p>
          <a
            href="mailto:cgsrehab@gmail.com?subject=My%20Story%20for%20CGS%20Wellness%20Centre"
            className="btn btn--primary"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;