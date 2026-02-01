import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/Searchmaterials', label: 'Search Materials' },
    { path: '/Application', label: 'By Application' },
    { path: '/Choose', label: 'Choose' },
    { path: '/About_m', label: 'About' },
  ];

  const supportLinks = [
    { path: '/Contact', label: 'Contact Us' },
    { path: '/Login', label: 'Login' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand Section */}
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="footer__logo">
              <img src={images.logo} alt="ThermalStar" />
              <span>ThermalStar</span>
            </Link>
            <p className="footer__tagline">
              Intelligent material selection for your construction projects.
              Find the perfect materials based on your specific requirements.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer__links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer__links-title">Quick Links</h4>
            <ul className="footer__links-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            className="footer__links-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer__links-title">Support</h4>
            <ul className="footer__links-list">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="footer__cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="footer__cta-title">Ready to find your materials?</h4>
            <p className="footer__cta-text">Start searching for the perfect materials for your project today.</p>
            <Link to="/Searchmaterials" className="footer__cta-btn">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} ThermalStar Material Suggestor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;