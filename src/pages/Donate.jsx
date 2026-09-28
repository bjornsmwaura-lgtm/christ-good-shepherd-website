import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaMobileAlt,
  FaUniversity,
  FaHandHoldingHeart,
  FaBoxOpen,
  FaPrayingHands,
  FaUsers,
  FaBullhorn,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
  FaCopy,
  FaHeart,
} from 'react-icons/fa';
import mpesaLogo from '../assets/images/M-PESA-icon.svg.@ERESIZE@.huge.png';
import './Donate.css';

function Donate() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  const impactItems = [
    {
      icon: <FaHandHoldingHeart />,
      title: 'Client Care',
      text: 'Daily care, counselling, and therapeutic support for every resident.',
    },
    {
      icon: <FaUsers />,
      title: 'Family Support',
      text: 'Family therapy and reintegration support for clients and their loved ones.',
    },
    {
      icon: <FaBoxOpen />,
      title: 'Facility & Meals',
      text: 'Nutritious meals, accommodation, and upkeep of a dignified environment.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Aftercare',
      text: 'Follow-up and reintegration support for up to 9 months after discharge.',
    },
  ];

  const inKindItems = [
    'Maize, beans, rice, and other dry foods',
    'Cooking oil, sugar, and tea leaves',
    'Fresh produce from farms or gardens',
    'Bedding, towels, and mattresses',
    'Toiletries and personal care items',
    'Farming inputs — seeds, tools, fertiliser',
    'Cleaning and household supplies',
    'Office and stationery supplies',
  ];

  return (
    <div className="donate">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--donate">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Donate</span>
          <h1 className="page-hero__title">Partner With Us</h1>
          <p className="page-hero__subtitle">
            Your generosity helps restore dignity, rebuild lives, and bring
            hope to individuals and families affected by addiction.
          </p>
        </div>
      </section>

      <Helmet>
  <title>Donate · Christ the Good Shepherd Wellness Centre</title>
  <meta
    name="description"
    content="Support our mission. Give via M-Pesa (Paybill 111999), sponsor a client, or donate goods. Every gift helps restore dignity and rebuild lives."
  />
</Helmet>

      {/* ===== WHY GIVE ===== */}
      <section className="section why-give">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Why Give</span>
            <h2 className="section__title">Every gift changes a life</h2>
            <p className="section__subtitle">
              Recovery takes time, care, and community. Your support makes it
              possible for someone to walk the full journey from admission
              to reintegration.
            </p>
          </div>

          <div className="impact-grid">
            {impactItems.map((item) => (
              <div key={item.title} className="impact-card">
                <div className="impact-card__icon">{item.icon}</div>
                <h3 className="impact-card__title">{item.title}</h3>
                <p className="impact-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAYS TO GIVE ===== */}
      <section className="section ways-to-give">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Ways to Give</span>
            <h2 className="section__title">Give the way that suits you</h2>
            <p className="section__subtitle">
              Every contribution large or small goes directly toward the
              care and dignity of our clients.
            </p>
          </div>

          <div className="give-grid">
            {/* M-PESA — PRIMARY */}
            <div className="give-card give-card--primary">
              <div className="give-card__badge">Most Used</div>
              <div className="give-card__icon give-card__icon--logo">
  <img src={mpesaLogo} alt="M-Pesa" className="give-card__logo" />
</div>
              <h3 className="give-card__title">M-Pesa</h3>
              <p className="give-card__desc">
                The fastest and easiest way to give. Use the details below.
              </p>

              <div className="give-card__details">
                <div className="give-detail">
                  <span className="give-detail__label">Paybill Number</span>
                  <div className="give-detail__row">
                    <span className="give-detail__value">111999</span>
                    <button
                      className="give-detail__copy"
                      onClick={() => copyToClipboard('111999', 'paybill')}
                      aria-label="Copy Paybill number"
                    >
                      {copied === 'paybill' ? '✓ Copied' : <><FaCopy /> Copy</>}
                    </button>
                  </div>
                </div>

                <div className="give-detail">
                  <span className="give-detail__label">Account Number</span>
                  <div className="give-detail__row">
                    <span className="give-detail__value">288005</span>
                    <button
                      className="give-detail__copy"
                      onClick={() => copyToClipboard('288005', 'account')}
                      aria-label="Copy Account number"
                    >
                      {copied === 'account' ? '✓ Copied' : <><FaCopy /> Copy</>}
                    </button>
                  </div>
                </div>

                <div className="give-detail">
                  <span className="give-detail__label">Account Name</span>
                  <span className="give-detail__value give-detail__value--name">
                    Christ the Good Shepherd Rehab
                  </span>
                </div>

                <div className="give-detail">
                  <span className="give-detail__label">Bank</span>
                  <span className="give-detail__value give-detail__value--name">
                    Sidian Bank
                  </span>
                </div>
              </div>

              <p className="give-card__note">
                <FaShieldAlt /> All donations go directly to the Centre's
                account.
              </p>
            </div>

           {/* BANK TRANSFER & INTERNATIONAL GIVING */}
<div className="give-card">
  <div className="give-card__icon">
    <FaUniversity />
  </div>
  <h3 className="give-card__title">Bank Transfer</h3>
  <p className="give-card__desc">
    For larger gifts, corporate giving, or international transfers, please
    contact us for more details. We will provide the necessary bank
    information and an official acknowledgement of your gift.
  </p>

  <div className="give-card__contact">
    <a
      href="mailto:cgsrehab@gmail.com?subject=Bank%20Transfer%20Details%20Request"
      className="btn btn--ghost"
    >
      Contact Us for Details <FaArrowRight />
    </a>
  </div>
</div>

            {/* IN-KIND */}
            <div className="give-card">
              <div className="give-card__icon">
                <FaBoxOpen />
              </div>
              <h3 className="give-card__title">In-Kind Donations</h3>
              <p className="give-card__desc">
                Goods and supplies are always needed and warmly welcomed.
              </p>

              <ul className="in-kind-list">
                {inKindItems.slice(0, 5).map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="in-kind-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/254791770653?text=Hello%2C%20I%20would%20like%20to%20donate%20goods%20to%20the%20Centre."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Arrange a Drop-off <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPONSOR A CLIENT ===== */}
      <section className="section sponsor">
        <div className="container">
          <div className="sponsor__inner">
            <div className="sponsor__content">
              <span className="section__eyebrow">Sponsor a Client</span>
              <h2 className="section__title sponsor__title">
                Change one life completely
              </h2>
              <p className="sponsor__text">
                For <strong>KSh 60,000 per month</strong>, you can sponsor one
                person through the full residential rehabilitation programme,
                covering medical care, counselling, accommodation, meals,
                and aftercare.
              </p>
              <p className="sponsor__text">
                Sponsors receive updates on their sponsored client's progress
                (with the client's consent) and the deep satisfaction of
                knowing their gift has rebuilt a life.
              </p>
              <div className="sponsor__buttons">
                <a
                  href="mailto:cgsrehab@gmail.com?subject=Sponsor%20a%20Client%20Inquiry"
                  className="btn btn--primary"
                >
                  <FaHeart /> Become a Sponsor
                </a>
                <a
                  href="https://wa.me/254791770653?text=Hello%2C%20I%20am%20interested%20in%20sponsoring%20a%20client."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-light"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="sponsor__card">
              <div className="sponsor__card-label">Sponsor One Client</div>
              <div className="sponsor__card-price">KSh 60,000</div>
              <div className="sponsor__card-period">per month</div>
              <ul className="sponsor__card-list">
                <li><FaCheckCircle /> Full residential programme</li>
                <li><FaCheckCircle /> Medical & psychiatric care</li>
                <li><FaCheckCircle /> Counselling & family therapy</li>
                <li><FaCheckCircle /> Accommodation & meals</li>
                <li><FaCheckCircle /> 9 months of aftercare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OTHER WAYS TO HELP ===== */}
      <section className="section other-ways">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Beyond Giving</span>
            <h2 className="section__title">Other ways to support the mission</h2>
          </div>

          <div className="other-ways__grid">
            <div className="other-way-card">
              <div className="other-way-card__icon">
                <FaPrayingHands />
              </div>
              <h3>Pray With Us</h3>
              <p>
                Please pray for our clients, their families, and our team. Prayer
                is the foundation of everything we do.
              </p>
            </div>

            <div className="other-way-card">
              <div className="other-way-card__icon">
                <FaUsers />
              </div>
              <h3>Volunteer</h3>
              <p>
                Share your time, skills, and presence with our clients through
                volunteering or mentorship.
              </p>
              <Link to="/get-involved#volunteer" className="other-way-card__link">
                Learn More <FaArrowRight />
              </Link>
            </div>

            <div className="other-way-card">
              <div className="other-way-card__icon">
                <FaBullhorn />
              </div>
              <h3>Spread the Word</h3>
              <p>
                Share our mission with your church, family, workplace, or
                community. Awareness changes lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRANSPARENCY ===== */}
      <section className="section transparency">
        <div className="container">
          <div className="transparency__inner">
            <div className="transparency__icon">
              <FaShieldAlt />
            </div>
            <h2 className="transparency__title">Your gift is handled with integrity</h2>
            <p className="transparency__text">
              Christ the Good Shepherd Wellness and Rehabilitation Centre
              operates as a department of <strong>Caritas Nyeri</strong> under
              the Catholic Archdiocese of Nyeri. All donations are received
              and managed with accountability and transparency, and are used
              directly to support the care of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THANK YOU CTA ===== */}
      <section className="section donate-cta">
        <div className="container">
          <div className="donate-cta__inner">
            <h2 className="donate-cta__title">Thank you for your generosity</h2>
            <p className="donate-cta__verse">
              "Each of you should give what you have decided in your heart to
              give, not reluctantly or under compulsion, for God loves a
              cheerful giver." — 2 Corinthians 9:7
            </p>
            <div className="donate-cta__buttons">
              <a
                href="tel:+254791770653"
                className="btn btn--outline-light"
              >
                Call Us: 0791 770 653
              </a>
              <Link to="/contact" className="btn btn--primary">
                Contact Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;