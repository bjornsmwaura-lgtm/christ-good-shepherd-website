import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaCheck,
  FaClipboardList,
  FaUserMd,
  FaHandshake,
  FaHome,
  FaCalendarCheck,
  FaShieldAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import admissionsHero from '../assets/images/admissions-hero.webp';
import './Admissions.css';

function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    relationship: 'self',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just show a success message.
    // Later we can wire this to email (EmailJS, Formspree, etc.)
    setSubmitted(true);
  };

  const whoWeServe = [
    'Individuals struggling with alcohol use disorders',
    'Individuals struggling with substance-use disorders',
    'Persons facing related psychosocial challenges',
    'Those needing psychiatric assessment and support',
    'Families seeking help for a loved one',
    'Clients seeking a faith-based, dignified recovery environment',
  ];

  const requirements = [
    'Willingness to participate in the programme',
    'A referral or self-referral is accepted',
    'Medical and psychiatric assessment upon admission',
    'Family or guardian support (where applicable)',
    'Consent to participate in the residential programme',
    'Commitment to the full treatment duration',
  ];

  const process = [
    {
      icon: <FaPhone />,
      title: '1. Reach Out',
      text: 'Call, WhatsApp, or email us to make an initial inquiry. You can also fill in the form below.',
    },
    {
      icon: <FaClipboardList />,
      title: '2. Initial Consultation',
      text: 'We discuss the situation, answer your questions, and confirm whether our programme suits the client\'s needs.',
    },
    {
      icon: <FaUserMd />,
      title: '3. Medical & Psychiatric Assessment',
      text: 'Upon admission, every client is assessed by our medical and psychiatric team to identify specific needs.',
    },
    {
      icon: <FaHome />,
      title: '4. Admission',
      text: 'The client is welcomed into our residential programme and assigned an individual therapist.',
    },
    {
      icon: <FaHandshake />,
      title: '5. Treatment Programme',
      text: 'A structured, multidisciplinary programme of counselling, medical care, spiritual support, and therapeutic activity.',
    },
    {
      icon: <FaCalendarCheck />,
      title: '6. Discharge & Aftercare',
      text: 'An individualised exit plan is created. Aftercare and follow-up continue for up to 9 months after discharge.',
    },
  ];

  const whatToBring = [
    'Valid national ID or passport',
    'Personal clothing for the duration of stay',
    'Toiletries and personal care items',
    'Any prescribed medications (declared on admission)',
    'Medical insurance card (if using SHA or other coverage)',
    'Contact details of family or next of kin',
  ];

  return (
    <div className="admissions">
      {/* ===== PAGE HERO ===== */}
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${admissionsHero})` }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Admissions</span>
          <h1 className="page-hero__title">Begin the Journey</h1>
          <p className="page-hero__subtitle">
            Taking the first step is often the hardest. We are here to walk
            with you with compassion, dignity, and hope.
          </p>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="section who-we-serve">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Who We Serve</span>
            <h2 className="section__title">We are here for you</h2>
            <p className="section__subtitle">
              Our programme welcomes individuals and families affected by
              addiction and related challenges.
            </p>
          </div>

          <ul className="check-grid">
            {whoWeServe.map((item) => (
              <li key={item} className="check-grid__item">
                <FaCheck className="check-grid__icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== REQUIREMENTS ===== */}
      <section className="section requirements">
        <div className="container">
          <div className="requirements__grid">
            <div className="requirements__content">
              <span className="section__eyebrow">What to Expect</span>
              <h2 className="section__title">Admission Requirements</h2>
              <p>
                Admission is simple and respectful. We accept both
                self-referrals and referrals from family, health
                professionals, churches, and community organisations.
              </p>
              <p>
                The most important requirement is a genuine willingness to
                begin the journey of recovery.
              </p>
              <ul className="check-list">
                {requirements.map((item) => (
                  <li key={item}>
                    <FaCheck className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="requirements__card">
              <h3 className="requirements__card-title">What to Bring</h3>
              <ul className="check-list">
                {whatToBring.map((item) => (
                  <li key={item}>
                    <FaCheck className="check-list__icon" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="requirements__card-note">
                Please don't worry if you're missing something. Our team
                will guide you through the details during the admission
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section process">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Step by Step</span>
            <h2 className="section__title">The Admission Process</h2>
            <p className="section__subtitle">
              From the first phone call to aftercare support, here is what
              the journey looks like.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <div key={step.title} className="process-card">
                <div className="process-card__icon">{step.icon}</div>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COST & CONFIDENTIALITY ===== */}
      <section className="section cost-confidential">
        <div className="container">
          <div className="cc-grid">
            <div className="cc-card cc-card--cost">
              <span className="cc-card__eyebrow">Cost & Coverage</span>
              <h3 className="cc-card__title">Transparent & Accessible</h3>
              <div className="cc-card__price">KSh 60,000</div>
              <p className="cc-card__price-note">per month, all-inclusive</p>
              <p className="cc-card__text">
                We also admit clients under <strong>SHA health insurance
                coverage</strong>, subject to applicable policy and
                eligibility. Clients and families are encouraged to confirm
                coverage with us during the admission process.
              </p>
            </div>

            <div className="cc-card cc-card--confidential">
              <span className="cc-card__eyebrow">Your Privacy</span>
              <h3 className="cc-card__title">
                <FaShieldAlt className="cc-card__icon" /> Complete
                Confidentiality
              </h3>
              <p className="cc-card__text">
                Every enquiry and admission is treated with strict
                confidentiality. Your identity, your family's privacy, and
                your journey remain protected at every step.
              </p>
              <p className="cc-card__text">
                No judgment. No shame. Just compassionate, dignified care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOWNLOADABLE FORM ===== */}
<section className="section download-form">
  <div className="container">
    <div className="download-form__inner">
      <div className="download-form__content">
        <span className="section__eyebrow">Download</span>
        <h2 className="section__title">Admission & Referral Form</h2>
        <p>
          Download our admission and referral form to prepare ahead of time.
          You can print it, fill it in, and bring it with you or email the
          completed form back to us before your visit.
        </p>
        <ul className="download-form__features">
          <li>
            <FaCheck className="check-list__icon" />
            Suitable for self-referrals and professional referrals
          </li>
          <li>
            <FaCheck className="check-list__icon" />
            Includes medical and next-of-kin details
          </li>
          <li>
            <FaCheck className="check-list__icon" />
            Print and bring, or email back to cgsrehab@gmail.com
          </li>
        </ul>
        <div className="download-form__buttons">
          <a
            href="/forms/admission-form.pdf"
            download="CGS-Admission-Form.pdf"
            className="btn btn--primary"
          >
            <FaDownload /> Download Form (PDF)
          </a>
          <a
            href="mailto:cgsrehab@gmail.com?subject=Admission%20Form%20Submission"
            className="btn btn--ghost"
          >
            Email Completed Form <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="download-form__preview">
        <div className="download-form__preview-inner">
          <div className="download-form__doc-icon">
            <FaFilePdf />
          </div>
          <span className="download-form__doc-label">Admission Form</span>
          <span className="download-form__doc-meta">PDF · A4 · 1 page</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ===== INQUIRY FORM ===== */}
      <section className="section inquiry">
        <div className="container">
          <div className="inquiry__grid">
            <div className="inquiry__intro">
              <span className="section__eyebrow">Get in Touch</span>
              <h2 className="section__title">Make an Inquiry</h2>
              <p>
                Fill in the form and our team will reach out to you
                confidentially. You can also call or WhatsApp us directly,
                whichever feels easier.
              </p>

              <div className="inquiry__contact">
                <a href="tel:+254791770653" className="inquiry__contact-item">
                  <FaPhone className="inquiry__contact-icon" />
                  <div>
                    <strong>Call Us</strong>
                    <span>+254 791 770 653</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/254791770653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inquiry__contact-item"
                >
                  <FaWhatsapp className="inquiry__contact-icon" />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Chat with us</span>
                  </div>
                </a>

                <a
                  href="mailto:cgsrehab@gmail.com"
                  className="inquiry__contact-item"
                >
                  <FaEnvelope className="inquiry__contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <span>cgsrehab@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="inquiry__form-wrap">
              {submitted ? (
                <div className="inquiry__success">
                  <div className="inquiry__success-icon">✓</div>
                  <h3 className="inquiry__success-title">
                    Thank you for reaching out
                  </h3>
                  <p>
                    We have received your message. A member of our team will
                    contact you confidentially and as soon as possible.
                  </p>
                  <p className="inquiry__success-verse">
                    "The Lord is close to the brokenhearted." — Psalm 34:18 -
                  </p>
                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        relationship: 'self',
                        message: '',
                      });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="inquiry__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label className="form-label">
                      Your Name *
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Full name"
                      />
                    </label>
                  </div>

                  <div className="form-row form-row--split">
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

                    <label className="form-label">
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      Who is this inquiry for?
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="self">Myself</option>
                        <option value="family">A family member</option>
                        <option value="friend">A friend</option>
                        <option value="professional">As a professional referral</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      How can we help? *
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="form-input form-textarea"
                        placeholder="Share as much or as little as you feel comfortable with. All information is treated confidentially."
                      />
                    </label>
                  </div>

                  <p className="form-disclaimer">
                    <FaShieldAlt /> Your information is treated with strict
                    confidentiality and will only be used to respond to your
                    inquiry.
                  </p>

                  <button type="submit" className="btn btn--primary btn--full">
                    Send Inquiry <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section admissions-cta">
        <div className="container">
          <div className="admissions-cta__inner">
            <h2 className="admissions-cta__title">
              Every journey begins with a single step
            </h2>
            <p className="admissions-cta__text">
              If you're unsure where to start, just call us. We'll listen, guide
              you, and help you find the right path forward.
            </p>
            <div className="admissions-cta__buttons">
              <a href="tel:+254791770653" className="btn btn--primary">
                <FaPhone /> Call +254 791 770 653
              </a>
              <Link to="/programs" className="btn btn--outline-light">
                View Our Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admissions;