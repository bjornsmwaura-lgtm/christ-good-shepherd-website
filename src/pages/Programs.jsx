import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHandsHelping,
  FaComments,
  FaHeartbeat,
  FaCross,
  FaUtensils,
  FaFutbol,
  FaUsers,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import programsHero from '../assets/images/program-hero.jpg';
import './Programs.css';

function Programs() {
  const { hash } = useLocation();

  // Scroll to section whenever the URL hash changes
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Delay to allow page to render first (especially if navigating from another route)
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const coreServices = [
    {
      icon: <FaHandsHelping />,
      title: 'Residential Rehabilitation',
      text: 'A structured 24-hour residential programme addressing the physical, psychological, social, emotional, and spiritual dimensions of recovery.',
    },
    {
      icon: <FaComments />,
      title: 'Counselling & Psychotherapy',
      text: 'Individual and group therapy, plus family therapy to heal relationships and rebuild trust.',
    },
    {
      icon: <FaHeartbeat />,
      title: 'Medical & Psychiatric Care',
      text: 'Continuous medical monitoring, psychiatric assessment on admission, and referral for specialised services.',
    },
    {
      icon: <FaCross />,
      title: 'Spiritual Care',
      text: 'Daily devotions, Bible study, and pastoral guidance integrated into the recovery programme.',
    },
    {
      icon: <FaUtensils />,
      title: 'Nutrition & Accommodation',
      text: 'Comfortable accommodation and nutritious, balanced meals guided by a qualified nutritionist.',
    },
    {
      icon: <FaFutbol />,
      title: 'Recreation & Activities',
      text: 'Games, physical activity, farming, and structured recreation that build discipline and confidence.',
    },
  ];

  const aaNaPoints = [
    'Alcoholics Anonymous (AA) sessions, Monday to Friday',
    'Narcotics Anonymous (NA) sessions, Monday to Friday',
    'Structured psychoeducation sessions',
    'An assigned individual therapist for every client',
    'Psychiatric assessment upon admission',
    "Individualised treatment plans based on each client's needs",
  ];

  const familyTherapyPoints = [
    'Address unresolved issues',
    'Rebuild trust and communication',
    'Make appropriate amends',
    "Understand each other's experiences",
    'Establish healthier relationships',
    'Develop realistic recovery expectations',
    "Prepare for the client's return to the community",
    'Create an exit and aftercare plan',
  ];

  const recreationPoints = [
    'Physical wellbeing',
    'Teamwork',
    'Social interaction',
    'Confidence',
    'Discipline',
    'Stress management',
    'Positive use of free time',
    'Healthy relationships',
  ];

  const aftercarePoints = [
    'Individualised exit and reintegration plan before discharge',
    'Scheduled aftercare and follow-up for up to 9 months',
    'Ongoing monitoring and early identification of challenges',
    'Strengthened relapse-prevention strategies',
    'Encouragement to continue in community support programmes',
    'Support for families throughout the reintegration process',
  ];

  return (
    <div className="programs">
      {/* ===== PAGE HERO ===== */}
      <section
        id="overview"
        className="page-hero"
        style={{ backgroundImage: `url(${programsHero})` }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <span className="page-hero__eyebrow">Our Programmes</span>
          <h1 className="page-hero__title">Holistic Care for Lasting Recovery</h1>
          <p className="page-hero__subtitle">
            A structured residential programme addressing the mind, body, and
            spirit — grounded in faith and delivered with dignity.
          </p>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section id="services" className="section intro">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">A Comprehensive Approach</span>
            <h2 className="section__title">
              More than treatment — a journey of restoration
            </h2>
            <p className="section__subtitle">
              We believe that recovery requires more than medical intervention
              alone. Our programmes address every dimension of a person's life
              — clinical, psychological, social, emotional, and spiritual.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESIDENTIAL PROGRAMME ===== */}
      <section id="residential" className="section residential">
        <div className="container">
          <div className="residential__grid">
            <div className="residential__content">
              <span className="section__eyebrow">Core Programme</span>
              <h2 className="section__title">Residential Rehabilitation</h2>
              <p>
                Our structured residential rehabilitation programme runs
                around the clock, integrating clinical care, counselling,
                spiritual support, and therapeutic activities into one
                cohesive recovery journey.
              </p>
              <p>
                Each client is assigned an{' '}
                <strong>individual therapist</strong> who follows their
                progress throughout treatment. Every client is also assessed by
                a <strong>psychiatrist upon admission</strong>, enabling our
                clinical team to identify and address any psychiatric or
                mental-health needs that may affect recovery.
              </p>
              <p>
                Our <strong>multidisciplinary approach</strong> allows us to
                develop individualised treatment plans based on each client's
                needs, circumstances, strengths, and recovery goals.
              </p>
            </div>

            <div className="residential__list-card">
              <h3 className="list-card__title">What's Included</h3>
              <ul className="check-list">
                {aaNaPoints.map((point) => (
                  <li key={point}>
                    <FaCheck className="check-list__icon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COUNSELLING & FAMILY THERAPY ===== */}
      <section id="counselling" className="section counselling">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Healing Relationships</span>
            <h2 className="section__title">Counselling & Family Therapy</h2>
            <p className="section__subtitle">
              Addiction affects not only the individual, but also their family
              and wider support system. We care for both.
            </p>
          </div>

          <div className="two-col-grid">
            <div className="info-block">
              <div className="info-block__icon">
                <FaComments />
              </div>
              <h3 className="info-block__title">
                Individual Counselling & Psychotherapy
              </h3>
              <p>
                Clients have opportunities to explore the underlying factors
                contributing to their substance use, develop healthier coping
                mechanisms, improve emotional regulation, and work toward
                positive behavioural change.
              </p>
            </div>

            <div className="info-block">
              <div className="info-block__icon">
                <FaUsers />
              </div>
              <h3 className="info-block__title">Family Therapy</h3>
              <p>
                Through structured family sessions, clients and their loved
                ones are supported to heal, rebuild trust, and prepare for a
                healthy return to community life.
              </p>
            </div>
          </div>

          <div className="family-goals">
            <h4 className="family-goals__title">
              What Family Therapy Helps With
            </h4>
            <ul className="family-goals__list">
              {familyTherapyPoints.map((point) => (
                <li key={point}>
                  <FaCheck className="check-list__icon" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== MEDICAL & PSYCHIATRIC ===== */}
      <section id="medical" className="section medical">
        <div className="container">
          <div className="medical__grid">
            <div className="medical__content">
              <span className="section__eyebrow">Safety & Care</span>
              <h2 className="section__title">Medical & Psychiatric Care</h2>
              <p>
                We provide continuous medical monitoring as part of our
                holistic rehabilitation programme. Clients receive medical
                assessment and appropriate care, with psychiatric assessment
                conducted upon admission.
              </p>
              <p>
                Our medical and clinical team monitors clients throughout their
                stay and makes referrals where specialised services are
                required.
              </p>
              <p>
                We maintain{' '}
                <strong>24-hour medical surveillance and security support</strong>,
                providing an environment designed to promote the safety and
                wellbeing of clients and staff.
              </p>
            </div>

            <div className="medical__badges">
              <div className="badge-card">
                <FaHeartbeat className="badge-card__icon" />
                <div>
                  <strong>24-Hour Medical Surveillance</strong>
                  <span>Continuous monitoring and support</span>
                </div>
              </div>
              <div className="badge-card">
                <FaShieldAlt className="badge-card__icon" />
                <div>
                  <strong>24-Hour Security</strong>
                  <span>Safe, protected environment</span>
                </div>
              </div>
              <div className="badge-card">
                <FaUsers className="badge-card__icon" />
                <div>
                  <strong>Multidisciplinary Team</strong>
                  <span>Doctors, nurses, psychologists & more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NUTRITION & ACCOMMODATION ===== */}
      <section id="nutrition" className="section nutrition">
        <div className="container">
          <div className="nutrition__grid">
            <div className="nutrition__col">
              <div className="nutrition__icon">
                <FaUtensils />
              </div>
              <h3 className="nutrition__title">Nutrition</h3>
              <p>
                Clients receive nutritious, balanced meals with dietary
                planning guided by the recommendations of a qualified
                nutritionist. Proper nutrition forms an important part of
                restoring physical wellbeing during recovery.
              </p>
            </div>

            <div className="nutrition__col">
              <div className="nutrition__icon">
                <FaShieldAlt />
              </div>
              <h3 className="nutrition__title">Accommodation</h3>
              <p>
                We provide comfortable accommodation in a secure and supportive
                environment, designed for rest, reflection, and the dignity
                that every person deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECREATION ===== */}
      <section id="recreation" className="section recreation">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Therapeutic Activities</span>
            <h2 className="section__title">Recreation & Positive Routine</h2>
            <p className="section__subtitle">
              Recovery involves more than clinical sessions. Structured
              recreation helps clients build discipline, confidence, and
              healthy habits.
            </p>
          </div>

          <div className="recreation__grid">
            <div className="recreation__text">
              <p>
                We encourage clients to participate in games, physical
                activity, outdoor activities, farming, and other structured
                therapeutic activities. These help clients develop productive
                routines and practical skills that carry over into life
                outside the Centre.
              </p>
            </div>

            <div className="recreation__list">
              {recreationPoints.map((point) => (
                <div key={point} className="recreation__chip">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AFTERCARE ===== */}
      <section id="aftercare" className="section aftercare">
        <div className="container">
          <div className="aftercare__grid">
            <div className="aftercare__list-card">
              <h3 className="list-card__title">Aftercare Includes</h3>
              <ul className="check-list">
                {aftercarePoints.map((point) => (
                  <li key={point}>
                    <FaCheck className="check-list__icon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="aftercare__content">
              <span className="section__eyebrow">Beyond the Centre</span>
              <h2 className="section__title">Aftercare & Reintegration</h2>
              <p>
                Successful rehabilitation is measured not only by completion of
                residential treatment, but by the client's ability to maintain
                recovery after returning to the community.
              </p>
              <p>
                Every client develops an{' '}
                <strong>individualised exit and reintegration plan</strong>{' '}
                before discharge. Scheduled aftercare and follow-up services
                are provided for up to <strong>9 months</strong> following
                discharge.
              </p>
              <p>
                The purpose of aftercare is to monitor progress, provide
                continued support, identify challenges early, strengthen
                relapse-prevention strategies, and encourage continued
                participation in community and support programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COST & SHA ===== */}
      <section id="cost" className="section cost">
        <div className="container">
          <div className="cost__inner">
            <span className="section__eyebrow">Investment in Recovery</span>
            <h2 className="section__title cost__title">
              Cost & SHA Coverage
            </h2>

            <div className="cost__grid">
              <div className="cost__card cost__card--primary">
                <span className="cost__label">Monthly Programme Fee</span>
                <div className="cost__amount">KSh 60,000</div>
                <p className="cost__note">
                  Per client, per month — all-inclusive
                </p>
              </div>

              <div className="cost__card">
                <span className="cost__label">SHA Coverage</span>
                <p className="cost__text">
                  We also admit clients under{' '}
                  <strong>SHA health insurance coverage</strong>, in accordance
                  with applicable SHA policy, eligibility requirements, and
                  approved benefits.
                </p>
                <p className="cost__note">
                  Clients and families are encouraged to confirm the applicable
                  coverage and requirements with the Centre during the
                  admission process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section programs-cta">
        <div className="container">
          <div className="programs-cta__inner">
            <h2 className="programs-cta__title">
              Ready to begin the journey?
            </h2>
            <p className="programs-cta__text">
              Reach out to us today. Whether for yourself or a loved one, our
              team is ready to walk with you.
            </p>
            <div className="programs-cta__buttons">
              <Link to="/admissions" className="btn btn--primary">
                Admissions Info <FaArrowRight />
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

export default Programs;