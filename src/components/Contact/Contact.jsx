import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../SEO/SEO';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the ThermalStar Material Suggestor team. Contact us for material suggestions, inquiries, or support."
        keywords="contact ThermalStar, material suggestor support, construction materials help, contact us"
        url="https://thermalstar-materialsuggestor.netlify.app/Contact"
      />

      <div className="contact-page">
        <div className="contact-page__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-page__header"
          >
            <span className="contact-page__badge">
              <span className="contact-page__badge-icon">📬</span>
              Get In Touch
            </span>
            <h1 className="contact-page__title">
              We'd love to
              <span className="gradient-text"> hear from you</span>
            </h1>
            <p className="contact-page__subtitle">
              Have questions about materials or need assistance? Reach out to us
              and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="contact-page__cards">
            <motion.a
              href="tel:9704214914"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="contact-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card__content">
                <h3 className="contact-card__title">Phone</h3>
                <p className="contact-card__value">+91 9704214914</p>
                <span className="contact-card__action">Call now →</span>
              </div>
            </motion.a>

            <motion.a
              href="mailto:sriramprayaga02@gmail.com"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="contact-card__icon contact-card__icon--email">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card__content">
                <h3 className="contact-card__title">Email</h3>
                <p className="contact-card__value">sriramprayaga02@gmail.com</p>
                <span className="contact-card__action">Send email →</span>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="contact-page__info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-page__info-card">
              <div className="contact-page__info-icon">🕐</div>
              <div className="contact-page__info-content">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
            <div className="contact-page__info-card">
              <div className="contact-page__info-icon">⚡</div>
              <div className="contact-page__info-content">
                <h4>Response Time</h4>
                <p>We typically respond within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact