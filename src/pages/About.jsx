import { Link } from 'react-router-dom';
import {
  FaCross,
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaAward,
  FaArrowRight,
} from 'react-icons/fa';
import aboutHero from '../assets/images/nature1.jpg';
import leaderFr from '../assets/images/nature2.jpg';
import leaderJohn from '../assets/images/nature3.jpg';
import facilityImg from '../assets/images/nature4.jpg';
import './About.css';

function About() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Dignity',
      text: 'Every person is treated with respect, compassion, and inherent worth.',
    },
    {
      icon: <FaCross />,
      title: 'Faith',
      text: 'Christ-centred care that nurtures spiritual and emotional wellbeing.',
    },
    {
      icon: <FaAward />,
      title: 'Professionalism',
      text: 'Qualified, licensed, and experienced staff across every department.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Holistic Care',
      text: 'Healing for the mind, body, and spirit — never just the symptoms.',
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      text: 'Restoring relationships and preparing clients for successful reintegration.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Integrity',
      text: 'Transparent, ethical, and accountable in all we do.',
    },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Founded',
      text: 'Established through the initiative of His Grace the Archbishop Emeritus of the Catholic Archdiocese of Nyeri, with a vision for dignified, faith-based rehabilitation.',
    },
    {
      year: '2022',
      title: 'Reopened',
      text: 'After significant renovation and expansion, the Centre was officially reopened by His Grace Archbishop Antony Muheria, marking a new chapter in our mission.',
    },
    {
      year: 'Today',
      title: 'Serving with Purpose',
      text: 'More than 500 clients served since inception, with a capacity of 40+ residential clients and a multidisciplinary team of 20+ staff.',
    },
  ];

  const accreditations = [
    'Kenya Medical Practitioners and Dentists Council (KMPDC)',
    'National Authority for the Campaign Against Alcohol and Drug Abuse (NACADA)',
    'County Government of Nyeri',
    'Social Health Authority (SHA)',
  ];

  return (
    <div className="about">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">About Us</span>
          <h1 className="page-hero__title">Recovery in Dignity</h1>
          <p className="page-hero__subtitle">
            A faith-based wellness and rehabilitation centre serving Nyeri
            County and beyond since 2016.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="section story">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Story</span>
            <h2 className="section__title">A journey rooted in compassion</h2>
          </div>

          <div className="story__grid">
            <div className="story__text">
              <p>
                Christ the Good Shepherd Wellness and Rehabilitation Centre is
                a faith-based facility located in Nyeri County, within the
                Catholic Archdiocese of Nyeri. The Centre was established in{' '}
                <strong>2016</strong> through the initiative of His Grace the
                Archbishop Emeritus of the Catholic Archdiocese of Nyeri, with
                a vision to provide a safe, compassionate, and dignified
                environment for individuals struggling with alcohol and
                substance-use disorders, and other related psychosocial
                challenges.
              </p>
              <p>
                From the beginning, the Centre was founded on the understanding
                that <strong>recovery requires more than medical intervention
                alone</strong>. True healing happens when individuals can
                regain their dignity, rebuild relationships, develop healthy
                coping mechanisms, strengthen their spiritual and emotional
                wellbeing, and acquire the skills to return successfully to
                their families and communities.
              </p>
              <p>
                After a period of operation, the facility underwent significant
                renovation to enhance its infrastructure, services, and
                capacity. The renovated Centre was{' '}
                <strong>officially reopened in 2022</strong> by His Grace
                Archbishop Antony Muheria, the Archbishop of the Catholic
                Archdiocese of Nyeri. The reopening marked a new chapter in our
                commitment to quality, holistic, and dignified rehabilitation
                services.
              </p>
              <p>
                Today, we continue to serve individuals and families affected
                by alcohol and substance-use disorders — guided always by our
                commitment to <strong>"Recovery in Dignity."</strong>
              </p>
            </div>

            <div className="story__image">
              <img src={facilityImg} alt="Christ the Good Shepherd facility" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Journey</span>
            <h2 className="section__title">Milestones along the way</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year} className="timeline__item">
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <span className="mv-card__eyebrow">Our Mission</span>
              <p className="mv-card__text">
                To provide holistic, professional, compassionate, and dignified
                rehabilitation services that address the physical,
                psychological, social, emotional, and spiritual dimensions of
                recovery.
              </p>
            </div>
            <div className="mv-card mv-card--accent">
              <span className="mv-card__eyebrow">Our Vision</span>
              <p className="mv-card__text">
                To be a place where every person struggling with addiction
                finds hope, healing, and the opportunity to rebuild their life
                with dignity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section values-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What Guides Us</span>
            <h2 className="section__title">Our Core Values</h2>
          </div>

          <div className="values-cards">
            {values.map((value) => (
              <div key={value.title} className="value-tile">
                <div className="value-tile__icon">{value.icon}</div>
                <h3 className="value-tile__title">{value.title}</h3>
                <p className="value-tile__text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="section leadership">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Leadership</span>
            <h2 className="section__title">Guided by experience and faith</h2>
            <p className="section__subtitle">
              The Centre operates as a department of Caritas Nyeri under the
              Catholic Archdiocese of Nyeri.
            </p>
          </div>

          <div className="leaders-grid">
            <div className="leader-card">
              <div className="leader-card__photo">
                <img src={leaderFr} alt="Rev. Fr. Stephen Gitonga" />
              </div>
              <h3 className="leader-card__name">Rev. Fr. Stephen Gitonga</h3>
              <p className="leader-card__role">
                Spiritual & Clinical Counsellor · Health Coordinator, Archdiocese of Nyeri
              </p>
              <p className="leader-card__bio">
                Fr. Gitonga's leadership supports the integration of spiritual
                care, counselling, health services, and rehabilitation into a
                comprehensive recovery programme.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-card__photo">
                <img src={leaderJohn} alt="John M. Marangu" />
              </div>
              <h3 className="leader-card__name">John M. Marangu</h3>
              <p className="leader-card__role">
                Clinical Psychologist · Chairman, KCPA Nyeri County
              </p>
              <p className="leader-card__bio">
                John leads a multidisciplinary team dedicated to ensuring every
                client receives professional, compassionate, and holistic care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION & ACCREDITATION ===== */}
      <section className="section location">
        <div className="container">
          <div className="location__grid">
            <div className="location__col">
              <span className="section__eyebrow">Location & Environment</span>
              <h2 className="section__title">A place set apart for healing</h2>
              <p className="location__address">
                <FaMapMarkerAlt className="location__icon" />
                Nyeri County, Nyeri Central, Kiganjo Ward, Kihuyo Village —
                next to Kamwenja Teachers College, approximately 6 km from
                Nyeri Town.
              </p>
              <p>
                The Centre sits in a cool, quiet, and serene environment,
                ideal for reflection, healing, and personal transformation.
                Bordering the Aberdare National Park, with views toward Nyeri
                Hill, our grounds offer a peaceful setting away from the
                pressures and distractions of urban life.
              </p>
              <p>
                The natural surroundings provide opportunities for outdoor
                activities, recreation, farming, reflection, and other
                therapeutic activities that complement the formal
                rehabilitation programme.
              </p>
            </div>

            <div className="location__col">
              <span className="section__eyebrow">Accreditation</span>
              <h2 className="section__title">Recognised & Regulated</h2>
              <p className="location__level">
                Level 5 rehabilitation centre · Level 3B medical centre
              </p>
              <ul className="accreditation-list">
                {accreditations.map((item) => (
                  <li key={item}>
                    <FaAward className="accreditation-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta__inner">
            <h2 className="about-cta__title">Learn more about our programmes</h2>
            <p className="about-cta__text">
              Explore the structured residential programme, counselling
              services, aftercare, and community reintegration support we offer.
            </p>
            <div className="about-cta__buttons">
              <Link to="/programs" className="btn btn--primary">
                Our Programmes <FaArrowRight />
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

export default About;