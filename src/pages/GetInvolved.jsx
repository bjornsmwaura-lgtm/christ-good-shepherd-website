import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHandsHelping,
  FaGraduationCap,
  FaUsers,
  FaHeart,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import './GetInvolved.css';

function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'volunteer',
    area: '',
    availability: '',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — later wire to EmailJS / Formspree
    setSubmitted(true);
  };

  const { hash } = useLocation();

useEffect(() => {
  if (hash) {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}, [hash]);

  // ===== Volunteer content =====
  const volunteerRoles = [
    {
      icon: <FaHandsHelping />,
      title: 'Programme Support',
      text: 'Assist with structured activities, group sessions, and therapeutic recreation under staff supervision.',
    },
    {
      icon: <FaUsers />,
      title: 'Mentorship & Companionship',
      text: 'Walk alongside clients as a positive role model, offering encouragement and dignified presence.',
    },
    {
      icon: <FaHeart />,
      title: 'Spiritual & Pastoral Support',
      text: 'Participate in devotions, Bible study, and prayer ministry alongside our spiritual team.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Skills & Vocational Training',
      text: 'Share practical skills — farming, carpentry, tailoring, computer literacy, or business basics.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Administrative & Logistics',
      text: 'Support the office, welcome desk, event coordination, or grounds and catering teams.',
    },
    {
      icon: <FaUsers />,
      title: 'Family & Community Outreach',
      text: 'Help with family visits, community awareness, and reintegration support activities.',
    },
  ];

  const volunteerExpectations = [
    'A genuine heart to serve with compassion and dignity',
    'Minimum age of 18 years',
    'A commitment of at least 4 hours per week for 3 months',
    'Respect for confidentiality and client privacy',
    'Willingness to follow the Centre\'s code of conduct',
    'A pastoral reference or introduction from your church, where possible',
  ];

  const volunteerGains = [
    'Meaningful service that transforms lives',
    'Practical experience in a holistic care setting',
    'Mentorship from qualified professionals',
    'A certificate of service after completion',
    'A supportive, faith-filled community',
  ];

  // ===== Internship content =====
  const internshipFields = [
    {
      icon: <FaGraduationCap />,
      title: 'Clinical Psychology',
      text: 'Assessment, individual therapy, group therapy, and case management alongside our clinical team.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Counselling & Psychotherapy',
      text: 'Direct counselling practice, family therapy observation, and case review under supervision.',
    },
    {
      icon: <FaUsers />,
      title: 'Social Work',
      text: 'Family assessments, community reintegration planning, and aftercare follow-up support.',
    },
    {
      icon: <FaHeart />,
      title: 'Nursing & Medical',
      text: 'Medical assessment, medication monitoring, and psychiatric care exposure.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Spiritual & Pastoral Care',
      text: 'Devotions, chaplaincy, and integration of faith into the therapeutic process.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Administration & Programmes',
      text: 'Programme coordination, records management, and organisational support.',
    },
  ];

  const internshipStructure = [
    'Duration: typically 3 months (adjustable to your institution\'s requirements)',
    'Supervised by a qualified professional in your field',
    'Weekly supervision and progress reviews',
    'Rotational exposure across departments',
    'Written evaluation and certificate on completion',
    'Opportunity to contribute to real client outcomes',
  ];

  const internshipRequirements = [
    'Currently enrolled in a recognised college or university',
    'Relevant coursework completed (as per institutional requirements)',
    'A formal letter of introduction from your institution',
    'Updated CV and cover letter',
    'Professional liability and personal accident insurance (where applicable)',
    'Willingness to sign and uphold the Centre\'s confidentiality agreement',
  ];

  return (
    <div className="get-involved">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--get-involved">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Get Involved</span>
          <h1 className="page-hero__title">Serve With Us</h1>
          <p className="page-hero__subtitle">
            Whether you have a few hours a week or a semester to give, your
            time and talent can help transform lives through dignified,
            faith-based recovery.
          </p>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section gi-intro">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Why Serve</span>
            <h2 className="section__title">Every role matters</h2>
            <p className="section__subtitle">
              From companionship to clinical practice, every person who serves
              at Christ the Good Shepherd plays a part in restoring dignity,
              rebuilding lives, and reflecting the love of Christ.
            </p>
          </div>

          <div className="gi-intro__grid">
            <div className="gi-intro__card">
              <div className="gi-intro__icon">
                <FaHandsHelping />
              </div>
              <h3>Volunteer</h3>
              <p>
                Give your time and skills to support our clients, staff, and
                community. Ideal for individuals with a passion to serve and
                a few hours to spare each week.
              </p>
              <a href="#volunteer" className="btn btn--ghost">
                Explore Volunteering <FaArrowRight />
              </a>
            </div>

            <div className="gi-intro__card gi-intro__card--accent">
              <div className="gi-intro__icon">
                <FaGraduationCap />
              </div>
              <h3>Internship</h3>
              <p>
                Gain supervised, hands-on experience in clinical, counselling,
                social work, and other fields within a structured rehabilitation
                programme.
              </p>
              <a href="#internship" className="btn btn--ghost">
                Explore Internships <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOLUNTEER ===== */}
      <section id="volunteer" className="section volunteer">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Volunteer</span>
            <h2 className="section__title">Give your time. Change a life.</h2>
            <p className="section__subtitle">
              Volunteers are an essential part of our community, offering
              presence, encouragement, skills, and hope to those in recovery.
            </p>
          </div>

          {/* Roles */}
          <h3 className="gi-subheading">Volunteer Roles</h3>
          <div className="gi-grid-3">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="gi-card">
                <div className="gi-card__icon">{role.icon}</div>
                <h4 className="gi-card__title">{role.title}</h4>
                <p className="gi-card__text">{role.text}</p>
              </div>
            ))}
          </div>

          {/* Expectations + Gains */}
          <div className="gi-two-col">
            <div className="gi-panel">
              <h3 className="gi-panel__title">
                <FaClock className="gi-panel__icon" />
                What We Ask
              </h3>
              <ul className="check-list">
                {volunteerExpectations.map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gi-panel gi-panel--accent">
              <h3 className="gi-panel__title">
                <FaHeart className="gi-panel__icon" />
                What You'll Gain
              </h3>
              <ul className="check-list">
                {volunteerGains.map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERNSHIP ===== */}
      <section id="internship" className="section internship">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Internship</span>
            <h2 className="section__title">Learn. Serve. Grow.</h2>
            <p className="section__subtitle">
              Our internship programme offers structured, supervised exposure
              to holistic rehabilitation ideal for students and recent
              graduates preparing for professional practice.
            </p>
          </div>

          {/* Fields */}
          <h3 className="gi-subheading">Fields of Internship</h3>
          <div className="gi-grid-3">
            {internshipFields.map((field) => (
              <div key={field.title} className="gi-card">
                <div className="gi-card__icon">{field.icon}</div>
                <h4 className="gi-card__title">{field.title}</h4>
                <p className="gi-card__text">{field.text}</p>
              </div>
            ))}
          </div>

          {/* Structure + Requirements */}
          <div className="gi-two-col">
            <div className="gi-panel gi-panel--accent">
              <h3 className="gi-panel__title">
                <FaGraduationCap className="gi-panel__icon" />
                Internship Structure
              </h3>
              <ul className="check-list">
                {internshipStructure.map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gi-panel">
              <h3 className="gi-panel__title">
                <FaShieldAlt className="gi-panel__icon" />
                Requirements
              </h3>
              <ul className="check-list">
                {internshipRequirements.map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section id="apply" className="section gi-form-section">
        <div className="container">
          <div className="gi-form__grid">
            {/* Left: Contact intro */}
            <div className="gi-form__intro">
              <span className="section__eyebrow">Apply</span>
              <h2 className="section__title">Start your journey with us</h2>
              <p>
                Fill in the form and a member of our team will contact you to
                discuss next steps. We review all applications with care and
                respond as promptly as possible.
              </p>

              <div className="gi-form__contact">
                <a href="tel:+254791770653" className="gi-form__contact-item">
                  <FaPhone className="gi-form__contact-icon" />
                  <div>
                    <strong>Call Us</strong>
                    <span>0791 770 653</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/254791770653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gi-form__contact-item"
                >
                  <FaWhatsapp className="gi-form__contact-icon" />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Chat with us</span>
                  </div>
                </a>

                <a
                  href="mailto:cgsrehab@gmail.com"
                  className="gi-form__contact-item"
                >
                  <FaEnvelope className="gi-form__contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <span>cgsrehab@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="gi-form__wrap">
              {submitted ? (
                <div className="gi-form__success">
                  <div className="gi-form__success-icon">✓</div>
                  <h3 className="gi-form__success-title">
                    Thank you for your application
                  </h3>
                  <p>
                    We have received your details. A member of our team will
                    be in touch with you soon.
                  </p>
                  <p className="gi-form__success-verse">
                    "Whatever you do, work at it with all your heart, as
                    working for the Lord." — Colossians 3:23
                  </p>
                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        type: 'volunteer',
                        area: '',
                        availability: '',
                        motivation: '',
                      });
                    }}
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form className="gi-form" onSubmit={handleSubmit}>
                  <div className="form-row form-row--split">
                    <label className="form-label">
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </label>

                    <label className="form-label">
                      Phone Number *
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="07XX XXX XXX"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      Email Address *
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <div className="form-row form-row--split">
                    <label className="form-label">
                      I am applying to be a *
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="volunteer">Volunteer</option>
                        <option value="intern">Intern</option>
                      </select>
                    </label>

                    <label className="form-label">
                      Area of Interest *
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="e.g., Counselling, Nursing, Farming"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      Availability
                      <input
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g., 4 hours/week, or 3 months starting June"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      Tell us a little about yourself *
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="form-input form-textarea"
                        placeholder="Share why you would like to serve or intern with us, and any relevant experience or skills."
                      />
                    </label>
                  </div>

                  <p className="form-disclaimer">
                    <FaShieldAlt /> Your information is treated with strict
                    confidentiality and will only be used to process your
                    application.
                  </p>

                  <button type="submit" className="btn btn--primary btn--full">
                    Submit Application <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section gi-cta">
        <div className="container">
          <div className="gi-cta__inner">
            <h2 className="gi-cta__title">
              Not quite the right fit? You can still help.
            </h2>
            <p className="gi-cta__text">
              Consider supporting the Centre through prayer, partnership, or a
              donation — every contribution makes a difference.
            </p>
            <div className="gi-cta__buttons">
              <Link to="/donate" className="btn btn--primary">
                Donate <FaArrowRight />
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

export default GetInvolved;