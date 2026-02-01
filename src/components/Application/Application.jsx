import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from '../../constants';

import './Application.scss';
import SEO from '../SEO/SEO';

const Application = () => {
  const [applicationState, setApplicationState] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const applications = [
    { value: 'Wrist Pins, Engine Cams, Gears', label: 'Wrist Pins, Engine Cams, Gears' },
    { value: 'Gun Barrels, Axles, Wrentches, Shafts', label: 'Gun Barrels, Axles, Wrenches, Shafts' },
    { value: 'Valves', label: 'Valves' },
    { value: 'Twist Drills, Hacksaw Blades', label: 'Twist Drills, Hacksaw Blades' },
    { value: 'Ball and Roller Bearings', label: 'Ball and Roller Bearings' },
    { value: 'Crankshafts, Propeller Shafts, Aircrafts', label: 'Crankshafts, Propeller Shafts, Aircrafts' },
    { value: 'Cement, Mining, Road Construction, Rail Roads', label: 'Cement, Mining, Road Construction, Rail Roads' },
    { value: 'Connecting rods, Bolts and Nuts', label: 'Connecting Rods, Bolts and Nuts' },
    { value: 'Gudgeon Pins, Cam Shafts, Drive Wheels, Clutch Plates, Valve Rockers', label: 'Gudgeon Pins, Cam Shafts, Drive Wheels, Clutch Plates' },
    { value: 'Transmission Gears and Chain Pins', label: 'Transmission Gears and Chain Pins' },
    { value: 'Pressure Vessels, Aircraft Structural Parts, Automobile Axles', label: 'Pressure Vessels, Aircraft Parts, Auto Axles' },
    { value: 'Heavy locomotives and Machine Forgings', label: 'Heavy Locomotives and Machine Forgings' },
    { value: 'Coil and Leaf Springs, Chisels, Punches', label: 'Coil and Leaf Springs, Chisels, Punches' },
    { value: 'Food and Chemical Plants, Utensils, Sanitary Fittings', label: 'Food & Chemical Plants, Utensils, Fittings' },
    { value: 'Machine Parts, Bolts, Screws, Cutlury springs, Scissors, Spindles', label: 'Machine Parts, Bolts, Screws, Springs' },
    { value: 'Hulls for Hydrospace Vehicles, Motor cases of Missiles, Cold Headed Bolts, Pressure valves & Vessels', label: 'Hydrospace Hulls, Missile Cases, Pressure Vessels' },
    { value: 'Heavy Forging Hammers, Hot & Trimming Tools, Cutting Dies, Drift Punches, WatchMakers Tool', label: 'Heavy Forging Hammers, Hot Tools, Dies' },
    { value: 'Chisels, Punches, Shear Blades, Scarfing Tools', label: 'Chisels, Punches, Shear Blades' },
    { value: 'Reamers Taps, Blanking & Stamping Dies   ', label: 'Reamers, Taps, Blanking & Stamping Dies' },
    { value: 'Intricate tool Shapes', label: 'Intricate Tool Shapes' },
    { value: 'Cutting Knives, Plug Gauges, Wire Drawing Dies ', label: 'Cutting Knives, Plug Gauges, Wire Dies' }
  ];

  const handleSearch = () => {
    if (!applicationState || applicationState === 'None') return;
    setIsSearching(true);
    setTimeout(() => {
      setShowResults(true);
      setIsSearching(false);
    }, 500);
  };

  const handleReset = () => {
    setApplicationState('');
    setShowResults(false);
  };

  // Check if any result matches
  const hasResults = () => {
    const app = applicationState;
    return (
      app.length === 30 || app.length === 37 || app.length === 6 ||
      app.length === 28 || app.length === 24 || app.length === 40 ||
      app.length === 45 || app.length === 31 || app.length === 68 ||
      app.length === 61 || app.length === 33 || app.length === 38 ||
      app.length === 39 || app.length === 53 || app.length === 65 ||
      app.length === 100 || app.length === 90 || app.length === 46 ||
      app.length === 21 || app.length === 41 || app.length === 47
    );
  };

  const isFieldSelected = applicationState && applicationState !== 'None' && applicationState !== '';

  return (
    <>
      <SEO
        title="Search by Application"
        description="Find construction materials based on your specific application. From engine components to tool manufacturing, get the right material for your industrial needs."
        keywords="application based materials, industrial materials, engine materials, tool steels, bearing materials, construction application"
        url="https://thermalstar-materialsuggestor.netlify.app/Application"
      />

      <div className="application-page">
        <div className="application-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Search by Application</span>
            </h1>
            <p className="hero-subtitle">
              Select your specific application to find the perfect material for your industrial needs
            </p>
          </div>
        </div>

        <div className="application-container">
          <div className="search-form-card">
            <div className="card-header">
              <div className="header-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h2>Select Your Application</h2>
              <p>Choose from the list of industrial applications below</p>
            </div>

            <div className="form-single">
              <div className="form-group">
                <label htmlFor="application">
                  <span className="label-icon">🔧</span>
                  Application Type
                </label>
                <div className="select-wrapper">
                  <select
                    id="application"
                    className="modern-select"
                    value={applicationState}
                    onChange={(e) => {
                      setApplicationState(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select an Application</option>
                    {applications.map((app, index) => (
                      <option key={index} value={app.value}>{app.label}</option>
                    ))}
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-group">
              <button
                className={`go-button ${!isFieldSelected ? 'disabled' : ''} ${isSearching ? 'loading' : ''}`}
                onClick={handleSearch}
                disabled={!isFieldSelected || isSearching}
              >
                {isSearching ? (
                  <>
                    <span className="spinner"></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Go
                  </>
                )}
              </button>

              <button className="reset-button" onClick={handleReset}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Reset
              </button>
            </div>
          </div>

          {showResults && (
            <div className="results-section">
              <h3 className="results-title">
                <span className="results-icon">🔬</span>
                Recommended Materials
              </h3>

              {!hasResults() ? (
                <div className="no-results-card">
                  <div className="no-results-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <h4>No Options Found</h4>
                  <p>We couldn't find materials for this application. Try selecting a different application from the list.</p>
                  <button className="try-again-button" onClick={handleReset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                    Try Different Application
                  </button>
                </div>
              ) : (
                <div className="results-grid">
                  {applicationState.length === 30 && (
                    <MaterialCard
                      title="Nickel Steels"
                      description="High-strength steel alloys containing nickel for improved toughness and corrosion resistance"
                      image={images.nickelsteel}
                      link="https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy"
                    />
                  )}
                  {applicationState.length === 37 && (
                    <MaterialCard
                      title="Chromium Steels (0.35% C, 0.5% Cr)"
                      description="Steel alloys with chromium for enhanced hardness and wear resistance"
                      image={images.crsteel}
                      link="https://www.hardening-of-stainless-steel.com/materials/chromium-steel/"
                    />
                  )}
                  {applicationState.length === 6 && (
                    <MaterialCard
                      title="Valve Steels, 5XXX Cr Steels or 3XXX Ni-Cr Steels"
                      description="Specialized steels for high-temperature valve applications"
                      image={images.valvesteel}
                      link="https://www.villaresmetalsinternational.com/Products/Valve-Steels/Austenitic"
                    />
                  )}
                  {applicationState.length === 28 && (
                    <MaterialCard
                      title="Chromium Steels (0.9% C, 1% Cr)"
                      description="High carbon chromium steel with excellent wear resistance"
                      image={images.crsteel}
                      link="https://www.hardening-of-stainless-steel.com/materials/chromium-steel/"
                    />
                  )}
                  {applicationState.length === 24 && (
                    <MaterialCard
                      title="Ball Bearing Steels"
                      description="Through-hardened steels designed for rolling element bearings"
                      image={images.ballbearingsteel}
                      link="https://en.wikipedia.org/wiki/Ball_(bearing)"
                    />
                  )}
                  {applicationState.length === 40 && (
                    <MaterialCard
                      title="Nickel Steels (0.25-0.45% C, 2.5-3.5% Ni) & Ni-Cr Steels"
                      description="High-performance alloys for aircraft and crankshaft applications"
                      image={images.nickelsteel}
                      link="https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy"
                    />
                  )}
                  {applicationState.length === 45 && (
                    <MaterialCard
                      title="Hadfield Steel"
                      description="High-manganese steel known for exceptional work-hardening properties"
                      image={images.hadfieldsteel}
                      link="https://en.wikipedia.org/wiki/Mangalloy"
                    />
                  )}
                  {applicationState.length === 31 && (
                    <MaterialCard
                      title="Manganese Steels (1.65-1.9% Mn)"
                      description="Steel alloys with manganese for improved strength and hardenability"
                      image={images.manganesesteel}
                      link="https://en.wikipedia.org/wiki/Mangalloy"
                    />
                  )}
                  {applicationState.length === 68 && (
                    <MaterialCard
                      title="Ni-Cr-Mo Steels (43XX & 47XX Series)"
                      description="Triple-alloy steels for high-strength structural applications"
                      image={images.nicrmosteel}
                      link="https://www.americanelements.com/nickel-chromium-molybdenum-iron-alloy"
                    />
                  )}
                  {applicationState.length === 61 && (
                    <MaterialCard
                      title="Cr-Mo Steels (41XX Steels)"
                      description="Chromium-molybdenum steels for transmission and pressure applications"
                      image={images.crmosteel}
                      link="https://en.wikipedia.org/wiki/SAE_steel_grades"
                    />
                  )}
                  {applicationState.length === 33 && (
                    <MaterialCard
                      title="Ni-Mo Steels (46XX & 48XX)"
                      description="Nickel-molybdenum steels for locomotive and heavy machinery"
                      image={images.nimosteel}
                      link="https://www.americanelements.com/nickel-molybdenum-alloy"
                    />
                  )}
                  {applicationState.length === 38 && (
                    <MaterialCard
                      title="Carbon Vanadium Steels"
                      description="Vanadium-enhanced steels for springs and impact tools"
                      image={images.carbvansteel}
                      link="https://www.aboutmechanics.com/what-is-vanadium-steel.htm"
                    />
                  )}
                  {applicationState.length === 39 && (
                    <MaterialCard
                      title="Silicon Steels (9260 Steels)"
                      description="Silicon-enhanced steels for springs and chisels"
                      image={images.sisteel}
                      link="https://www.thomasnet.com/articles/metals-metal-products/all-about-9260-steel-properties-strength-and-uses/"
                    />
                  )}
                  {applicationState.length === 53 && (
                    <MaterialCard
                      title="303 & 303Se Stainless Steels"
                      description="Free-machining stainless steels for food and chemical applications"
                      image={images.ststeel}
                      link="https://www.aalco.co.uk/datasheets/Stainless-Steel-14305-303-Bar_107.ashx"
                    />
                  )}
                  {applicationState.length === 65 && (
                    <MaterialCard
                      title="Martensitic Stainless Steels (4XX)"
                      description="Hardenable stainless steels for cutlery and machine parts"
                      image={images.martsteel}
                      link="https://en.wikipedia.org/wiki/Martensitic_stainless_steel"
                    />
                  )}
                  {applicationState.length === 100 && (
                    <MaterialCard
                      title="Maraging Steels (18-25% Ni)"
                      description="Ultra-high-strength steels for aerospace and defense applications"
                      image={images.maragsteel}
                      link="https://en.wikipedia.org/wiki/Maraging_steel"
                    />
                  )}
                  {applicationState.length === 90 && (
                    <MaterialCard
                      title="Water Hardening Tool Steels (W1, W2)"
                      description="Simple carbon tool steels hardened by water quenching"
                      image={images.w1steel}
                      link="https://www.azom.com/article.aspx?ArticleID=9114"
                    />
                  )}
                  {applicationState.length === 46 && (
                    <MaterialCard
                      title="Shock Resisting Tool Steels"
                      description="Tool steels designed to withstand repeated impact loading"
                      image={images.shocksteel}
                      link="https://www.azom.com/article.aspx?ArticleID=6140"
                    />
                  )}
                  {applicationState.length === 21 && (
                    <MaterialCard
                      title="Cold Work Tool Steels (D2, D3, D4)"
                      description="High-chromium tool steels for cold forming and cutting dies"
                      image={images.d2steel}
                      link="https://en.wikipedia.org/wiki/SAE_steel_grades"
                    />
                  )}
                  {applicationState.length === 41 && (
                    <MaterialCard
                      title="Air & Oil Hardening Tool Steels"
                      description="Deep-hardening tool steels with minimal distortion"
                      image={images.airhardsteel}
                      link="https://www.azom.com/article.aspx?ArticleID=6141"
                    />
                  )}
                  {applicationState.length === 47 && (
                    <MaterialCard
                      title="Oil Hardening Tool Steels"
                      description="Versatile tool steels for gauges and wire drawing dies"
                      image={images.oilhardsteel}
                      link="https://www.azom.com/article.aspx?ArticleID=6141"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Material Card Component
const MaterialCard = ({ title, description, image, link }) => (
  <div className="material-card">
    <div className="card-image-section">
      {image && <img src={image} alt={title} className="material-image" />}
    </div>
    <div className="card-content">
      <h4 className="material-title">{title}</h4>
      <p className="material-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="learn-more-link"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  </div>
);

export default Application;