import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaShieldAlt,
  FaArrowRight,
  FaDirections,
} from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
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

  const faqs = [
    {
      q: 'Do I need a referral to be admitted?',
      a: 'No. We accept both self-referrals and referrals from family, health professionals, churches, and community organisations.',
    },
    {
      q: 'Is my information kept confidential?',
      a: 'Yes. Every enquiry and admission is treated with strict confidentiality. Your identity and privacy remain protected at every step.',
    },
    {
      q: 'Do you accept SHA health insurance?',
      a: 'Yes. We admit clients under SHA health insurance coverage, in accordance with applicable policy and eligibility requirements.',
    },
    {
      q: 'How much does the programme cost?',
      a: 'The residential programme is KSh 60,000 per month, all-inclusive. Clients using SHA coverage should confirm applicable benefits with us during admission.',
    },
    {
      q: 'Can I visit the Centre before deciding?',
      a: 'Yes. We warmly welcome visits by appointment. Please call or WhatsApp us to arrange a suitable time.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We primarily serve Nyeri County and the surrounding region, but we welcome clients from across Kenya.',
    },
  ];

  return (
    <div className="contact">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero page-hero--contact">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Contact Us</span>
          <h1 className="page-hero__title">Get in Touch</h1>
          <p className="page-hero__subtitle">
            Whether you're seeking help, making a referral, or offering
            support, we would be glad to hear from you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="section contact-cards-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Reach Us</span>
            <h2 className="section__title">However you prefer to connect</h2>
          </div>

          <div className="contact-cards">
            <a
              href="tel:+254791770653"
              className="contact-card contact-card--phone"
            >
              <div className="contact-card__icon">
                <FaPhone />
              </div>
              <h3 className="contact-card__title">Call Us</h3>
              <p className="contact-card__value">+254 791 770 653</p>
              <span className="contact-card__action">Tap to call →</span>
            </a>

            <a
              href="https://wa.me/254791770653"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--whatsapp"
            >
              <div className="contact-card__icon">
                <FaWhatsapp />
              </div>
              <h3 className="contact-card__title">WhatsApp</h3>
              <p className="contact-card__value">Chat with us</p>
              <span className="contact-card__action">Open WhatsApp →</span>
            </a>

            <a
              href="mailto:cgsrehab@gmail.com"
              className="contact-card contact-card--email"
            >
              <div className="contact-card__icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-card__title">Email</h3>
              <p className="contact-card__value">cgsrehab@gmail.com</p>
              <span className="contact-card__action">Send an email →</span>
            </a>

            <div className="contact-card contact-card--address">
              <div className="contact-card__icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-card__title">Visit Us</h3>
              <p className="contact-card__value">
                Kiganjo Ward, Kihuyo Village
              </p>
              <span className="contact-card__action">Next to Kamwenja Teachers College</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-main__grid">
            {/* Left — form */}
            <div className="contact-form__wrap">
              <span className="section__eyebrow">Send a Message</span>
              <h2 className="section__title">We'd love to hear from you</h2>
              <p className="contact-form__intro">
                Fill in the form and we'll get back to you as soon as possible.
                All messages are handled confidentially.
              </p>

              {submitted ? (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">✓</div>
                  <h3 className="contact-form__success-title">
                    Message received
                  </h3>
                  <p>
                    Thank you for reaching out. A member of our team will
                    respond to you shortly.
                  </p>
                  <p className="contact-form__success-verse">
                    "The Lord is near to all who call on Him." — Psalm 145:18 -
                  </p>
                  <button
                    className="btn btn--primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'general',
                        message: '',
                      });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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

                  <div className="form-row form-row--split">
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

                    <label className="form-label">
                      Subject *
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="referral">Referral</option>
                        <option value="donation">Donation / Partnership</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="form-label">
                      Message *
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="form-input form-textarea"
                        placeholder="How can we help you?"
                      />
                    </label>
                  </div>

                  <p className="form-disclaimer">
                    <FaShieldAlt /> Your information is treated with strict
                    confidentiality and will only be used to respond to your
                    message.
                  </p>

                  <button
                    type="submit"
                    className="btn btn--primary btn--full"
                  >
                    Send Message <FaArrowRight />
                  </button>
                </form>
              )}
            </div>

            {/* Right — info panel */}
            <div className="contact-info">
              <div className="contact-info__block">
                <h3 className="contact-info__title">
                  <FaMapMarkerAlt className="contact-info__icon" />
                  Address
                </h3>
                <p>
                  Christ the Good Shepherd Wellness &amp; Rehabilitation Centre
                  <br />
                  Kiganjo Ward, Kihuyo Village
                  <br />
                  Next to Kamwenja Teachers College
                  <br />
                  Nyeri County, Kenya
                </p>
                <p className="contact-info__muted">
                  Postal: P.O. Box 288-10100, Nyeri
                </p>
              </div>

              <div className="contact-info__block">
                <h3 className="contact-info__title">
                  <FaClock className="contact-info__icon" />
                  Office Hours
                </h3>
                <ul className="contact-info__hours">
                  <li>
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>Open</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Open</span>
                  </li>
                </ul>
                <p className="contact-info__muted">
                  For urgent admissions outside these hours, please call the
                  number above — our team is available 24/7 for emergencies.
                </p>
              </div>

              <div className="contact-info__block">
                <h3 className="contact-info__title">
                  <FaDirections className="contact-info__icon" />
                  Getting Here
                </h3>
                <p>
                  We are approximately <strong>6 km from Nyeri Town</strong>,
                  along the Nyeri–Nyahururu road, next to Kamwenja Teachers
                  College.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="section contact-map-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Find Us</span>
            <h2 className="section__title">Our Location</h2>
            <p className="section__subtitle">
              Bordering the Aberdare National Park, with views toward Nyeri Hill.
            </p>
          </div>

          <div className="contact-map">
            <iframe
              title="Christ the Good Shepherd Wellness Centre Location"
              src="https://www.google.com/maps?q=Kamwenja+Teachers+College,+Nyeri,+Kenya&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact-map__cta">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kamwenja+Teachers+College,+Nyeri,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <FaDirections /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section contact-faq">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Quick Answers</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <div className="faq-card__icon">
                  <FaCheck />
                </div>
                <h3 className="faq-card__q">{faq.q}</h3>
                <p className="faq-card__a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section contact-cta">
        <div className="container">
          <div className="contact-cta__inner">
            <h2 className="contact-cta__title">
              Ready to take the next step?
            </h2>
            <p className="contact-cta__text">
              Whether for yourself or a loved one, we are here to walk with
              you. Reach out today.
            </p>
            <div className="contact-cta__buttons">
              <Link to="/admissions" className="btn btn--primary">
                Admissions Info <FaArrowRight />
              </Link>
              <a href="tel:+254791770653" className="btn btn--outline-light">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;