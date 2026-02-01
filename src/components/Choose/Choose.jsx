import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../SEO/SEO';
import './choose.scss';

const Choose = () => {
  return (
    <>
      <SEO
        title="Choose Material Selection Method"
        description="Select how you want ThermalStar to suggest the perfect construction material - by properties or by application. Find materials that match your exact requirements."
        keywords="material selection, construction properties, material application, choose materials, thermal star guide"
        url="https://thermalstar-materialsuggestor.netlify.app/Choose"
      />

      <div className="choose-page">
        <div className="choose-page__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="choose-page__header"
          >
            <span className="choose-page__badge">
              <span className="choose-page__badge-icon">🎯</span>
              Selection Method
            </span>
            <h1 className="choose-page__title">
              How would you like to
              <span className="gradient-text"> find your material</span>?
            </h1>
            <p className="choose-page__subtitle">
              Choose the method that best suits your needs. Search by material properties
              or find materials based on your specific application.
            </p>
          </motion.div>

          <div className="choose-page__cards">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to='/Searchmaterials' className="choose-card">
                <div className="choose-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                </div>
                <h3 className="choose-card__title">By Properties</h3>
                <p className="choose-card__description">
                  Search materials based on toughness, hardness, ductility, and machinability
                </p>
                <div className="choose-card__tags">
                  <span>Toughness</span>
                  <span>Hardness</span>
                  <span>Ductility</span>
                  <span>Machinability</span>
                </div>
                <div className="choose-card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to='/Application' className="choose-card choose-card--secondary">
                <div className="choose-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="choose-card__title">By Application</h3>
                <p className="choose-card__description">
                  Find materials tailored to your specific industrial application needs
                </p>
                <div className="choose-card__tags">
                  <span>Engine Parts</span>
                  <span>Tools</span>
                  <span>Machinery</span>
                  <span>Construction</span>
                </div>
                <div className="choose-card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Choose