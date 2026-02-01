import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

const features = [
  {
    title: 'Efficient Selection',
    description: 'Save time and resources with our intelligent material matching system',
    imgUrl: images.about01,
    icon: '⚡'
  },
  {
    title: 'Smart Design',
    description: 'Create attractive, durable structures with the right materials',
    imgUrl: images.about02,
    icon: '🎨'
  },
  {
    title: 'Lasting Quality',
    description: 'Choose materials that stand the test of time for decades',
    imgUrl: images.about04,
    icon: '🏆'
  },
  {
    title: 'Expert Guidance',
    description: 'Get professional recommendations for your specific needs',
    imgUrl: images.about03,
    icon: '🎯'
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-section__header"
        >
          <span className="about-section__badge">Why Choose Us</span>
          <h2 className="about-section__title">
            Know That <span>Good Materials</span>
            <br />means <span>Safer Infrastructures</span>
          </h2>
          <p className="about-section__subtitle">
            We help you find the perfect materials for your construction projects,
            ensuring quality, durability, and safety.
          </p>
        </motion.div>

        <div className="about-section__grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='about-card'
            >
              <div className="about-card__image-wrapper">
                <img src={feature.imgUrl} alt={feature.title} className="about-card__image" />
                <div className="about-card__icon">{feature.icon}</div>
              </div>
              <div className="about-card__content">
                <h3 className='about-card__title'>{feature.title}</h3>
                <p className='about-card__description'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;