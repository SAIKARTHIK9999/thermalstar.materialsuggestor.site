import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <section id='home' className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='hero__text'
          >
            <span className='hero__badge'>
              <span className='hero__badge-icon'>🏗️</span>
              Material Selection Made Easy
            </span>

            <h1 className='hero__title'>
              Find the Perfect
              <span className='hero__title-gradient'> Material </span>
              for Your Project
            </h1>

            <p className='hero__subtitle'>
              Thermal Star's intelligent material suggestion system helps you discover
              the ideal materials based on toughness, hardness, ductility, and machinability.
            </p>

            <div className='hero__buttons'>
              <Link to='/Searchmaterials' className='hero__btn hero__btn--primary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search Materials
              </Link>
              <Link to='/Application' className='hero__btn hero__btn--secondary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                By Application
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='hero__visual'
          >
            <div className='hero__image-wrapper'>
              <img src={images.profile} alt='Material Suggester' className='hero__image' />
              <div className='hero__image-overlay'></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='hero__stat hero__stat--1'
            >
              <span className='hero__stat-icon'>💪</span>
              <div className='hero__stat-content'>
                <span className='hero__stat-value'>20+</span>
                <span className='hero__stat-label'>Steel Types</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='hero__stat hero__stat--2'
            >
              <span className='hero__stat-icon'>🔧</span>
              <div className='hero__stat-content'>
                <span className='hero__stat-value'>50+</span>
                <span className='hero__stat-label'>Applications</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className='hero__floating'>
          {[images.flutter, images.redux, images.sass].map((icon, index) => (
            <motion.div
              key={index}
              className='hero__floating-item'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <img src={icon} alt="technology" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;