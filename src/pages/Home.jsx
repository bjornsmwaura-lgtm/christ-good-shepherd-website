import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandsHelping,
  FaBookOpen,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaArrowRight,
} from 'react-icons/fa';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import directorImg from '../assets/images/director.jpeg';
import './Home.css';

function Home() {
  const heroImages = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  // Rotate hero background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const programs = [
    {
      icon: <FaHandsHelping />,
      title: 'Rehabilitation',
      description:
        'Structured, faith-based recovery programs for individuals overcoming addiction and life-controlling challenges.',
    },
    {
      icon: <FaBookOpen />,
      title: 'Counseling',
      description:
        'Professional one-on-one and group counseling to guide residents toward healing, wholeness, and purpose.',
    },
    {
      icon: <FaHeart />,
      title: 'Spiritual Care',
      description:
        'Daily devotions, Bible study, and pastoral guidance to nurture a personal relationship with Christ.',
    },
    {
      icon: <FaUsers />,
      title: 'Skills Training',
      description:
        'Practical vocational training that equips residents with tools for sustainable independence.',
    },
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Confidential & Safe',
      text: 'A private, judgment-free environment where every person is treated with dignity.',
    },
    {
      icon: <FaHeart />,
      title: 'Christ-Centred',
      text: 'Every program is rooted in the love, grace, and truth of Jesus Christ.',
    },
    {
      icon: <FaUsers />,
      title: 'Community-Driven',
      text: 'Family, church, and community are welcomed as partners in every journey.',
    },
    {
      icon: <FaLeaf />,
      title: 'Holistic Approach',
      text: 'We care for the mind, body, and spirit — not just the symptoms.',
    },
  ];

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        {/* Rotating background layers */}
        <div className="hero__backgrounds">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero__bg ${index === currentImage ? 'hero__bg--active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Dark overlay for readability */}
        <div className="hero__overlay" />

        {/* Content */}
        <div className="hero__content">
          <span className="hero__eyebrow">Welcome to</span>
          <h1 className="hero__title">
            Christ the Good Shepherd<br />
            <span className="hero__title-accent">Wellness Centre</span>
          </h1>
          <p className="hero__verse">
            "He makes me lie down in green pastures, He leads me beside quiet waters, He restores my soul."
            <br />— Psalm 23:2–3
          </p>
          <p className="hero__subtitle">
            "Recovery in Dignity": Restoring hope. Renewing minds. Rebuilding lives through Christ.
          </p>
          <div className="hero__buttons">
            <Link to="/admissions" className="btn btn--primary">
              Get Help <FaArrowRight />
            </Link>
            <Link to="/donate" className="btn btn--outline">
              Support Our Mission
            </Link>
          </div>

          {/* Dots indicator */}
          <div className="hero__dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`hero__dot ${index === currentImage ? 'hero__dot--active' : ''}`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Show background image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIRECTOR'S WELCOME ===== */}
<section className="section director">
  <div className="container">
    <div className="director__grid">
      {/* Photo */}
      <div className="director__photo-wrap">
        <div className="director__photo">
          <img src={directorImg} alt="Rev. Fr. Stephen Gitonga" />
        </div>
        <div className="director__badge">
          <span className="director__badge-icon">✝</span>
          <span className="director__badge-text">
            Spiritual & Clinical Counsellor
          </span>
        </div>
      </div>

      {/* Message */}
      <div className="director__message">
        <span className="section__eyebrow">A Welcome Message from Our Director</span>
        <h2 className="section__title">
          "You are not alone on this journey."
        </h2>
        <p>
          Welcome to Christ the Good Shepherd Wellness and Rehabilitation
          Centre. Whether you are seeking help for yourself or for someone you
          love, please know that you have come to a place of compassion,
          dignity, and hope.
        </p>
        <p>
          We believe that recovery is about more than simply stopping the use
          of alcohol or drugs. It is about restoring the whole person mind,
          body, and spirit and helping each individual rediscover their
          God-given worth and purpose. That is why we say: <strong>Recovery in
          Dignity.</strong>
        </p>
        <p>
          Our doors are open. Our team is ready. And our prayer is that every
          person who walks through them finds healing, restoration, and a
          future worth living for.
        </p>

        <div className="director__signature">
          <p className="director__name">Rev. Fr. Stephen Gitonga</p>
          <p className="director__role">
            Director, Spiritual & Clinical Counsellor. Health Coordinator,
            Catholic Archdiocese of Nyeri
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== MOTTO BANNER ===== */}
<section className="motto-banner">
  <div className="container">
    <div className="motto-banner__inner">
      <span className="motto-banner__eyebrow">Our Guiding Principle</span>
      <p className="motto-banner__motto">"Recovery in Dignity"</p>
      <p className="motto-banner__text">
        Every person who comes to us deserves to be treated with compassion,
        respect, and inherent worth regardless of their past, their
        struggles, or their circumstances. We walk with each individual on
        their journey toward healing, wholeness, and a renewed life.
      </p>
    </div>
  </div>
</section>

      {/* ===== MISSION / WELCOME ===== */}
      <section className="section welcome">
        <div className="container">
          <div className="welcome__grid">
            <div className="welcome__text">
              <span className="section__eyebrow">Our Mission</span>
              <h2 className="section__title">
                A place of healing, hope, and new beginnings
              </h2>
              <p>
                Christ the Good Shepherd Wellness Centre exists to see lives
                transformed by the power of God's love. We walk alongside
                individuals and families facing addiction, trauma, and
                brokenness — offering compassionate care, professional
                counseling, and a Christ-centred community where healing can
                take root.
              </p>
              <p>
                Whether you are seeking help for yourself or a loved one, you
                will find a safe, welcoming place here. No judgment. No shame.
                Just the hope that only Christ can give.
              </p>
              <Link to="/about" className="btn btn--ghost">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>

            <div className="welcome__verse-card">
              <div className="welcome__verse-quote">“</div>
              <p className="welcome__verse-text">
                Come to me, all you who are weary and burdened, and I will give you rest.
              </p>
              <p className="welcome__verse-ref">— Matthew 11:28</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="section programs-preview">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What We Offer</span>
            <h2 className="section__title">Our Programs</h2>
            <p className="section__subtitle">
              Every program is designed to meet people where they are and
              guide them toward lasting wholeness in Christ.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.title} className="program-card">
                <div className="program-card__icon">{program.icon}</div>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__text">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="section__cta">
            <Link to="/programs" className="btn btn--primary">
              Explore All Programs <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-us">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Why Choose Us</span>
            <h2 className="section__title">What Makes Us Different</h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="section stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stat">
              <div className="stat__number">500+</div>
              <div className="stat__label">Lives Touched</div>
            </div>
            <div className="stat">
              <div className="stat__number">24/7</div>
              <div className="stat__label">Prayer Support</div>
            </div>
            <div className="stat">
              <div className="stat__number">5+</div>
              <div className="stat__label">Programs Offered</div>
            </div>
            <div className="stat">
              <div className="stat__number">100%</div>
              <div className="stat__label">Confidential</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section final-cta">
        <div className="container">
          <div className="final-cta__inner">
            <h2 className="final-cta__title">Be Part of the Story</h2>
            <p className="final-cta__text">
              Whether you need help or want to give it, there's a place for you here.
            </p>
            <div className="final-cta__buttons">
              <Link to="/donate" className="btn btn--primary">
                Donate Now
              </Link>
              <Link to="/contact" className="btn btn--outline-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;