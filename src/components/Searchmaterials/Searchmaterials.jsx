import React, { useState } from 'react';

import './Searchmaterials.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from '../../constants';
import SEO from '../SEO/SEO';

const Searchmaterials = () => {
  const [toughnessState, setToughnessState] = useState('');
  const [scratchResistance, setScratchResistanceState] = useState('');
  const [ductilityState, setDuctilityState] = useState('');
  const [machinabilityState, setMachinabilityState] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setShowResults(true);
      setIsSearching(false);
    }, 500);
  };

  const handleReset = () => {
    setToughnessState('');
    setScratchResistanceState('');
    setDuctilityState('');
    setMachinabilityState('');
    setShowResults(false);
  };

  // Check if any result matches
  const hasResults = () => {
    const t = toughnessState;
    const s = scratchResistance;
    const d = ductilityState;
    const m = machinabilityState;

    return (
      (t === 'medium' && s === 'medium' && d === 'medium' && m === 'high') ||
      (t === 'high' && s === 'medium' && d === 'high' && m === 'low') ||
      (t === 'medium' && s === 'medium' && d === 'low' && m === 'medium') ||
      (t === 'medium' && s === 'low' && d === 'medium' && m === 'high') ||
      (t === 'high' && s === 'medium' && d === 'medium' && m === 'medium') ||
      (t === 'medium' && s === 'low' && d === 'medium' && m === 'low') ||
      (t === 'high' && s === 'medium' && d === 'medium' && m === 'low') ||
      (t === 'medium' && s === 'high' && d === 'medium' && m === 'low') ||
      (t === 'low' && s === 'high' && d === 'high' && m === 'low') ||
      (t === 'medium' && s === 'medium' && d === 'high' && m === 'medium') ||
      (t === 'medium' && s === 'medium' && d === 'high' && m === 'low') ||
      (t === 'medium' && s === 'medium' && d === 'medium' && m === 'low') ||
      (t === 'high' && s === 'medium' && d === 'medium' && m === 'high') ||
      (t === 'medium' && s === 'low' && d === 'medium' && m === 'medium') ||
      (t === 'high' && s === 'medium' && d === 'high' && m === 'high') ||
      (t === 'low' && s === 'high' && d === 'high' && m === 'low') ||
      (t === 'high' && s === 'medium' && d === 'high' && m === 'medium') ||
      (t === 'medium' && s === 'low' && d === 'medium' && m === 'high') ||
      (t === 'low' && s === 'high' && d === 'medium' && m === 'medium') ||
      (t === 'high' && s === 'medium' && d === 'medium' && m === 'medium') ||
      (t === 'low' && s === 'high' && d === 'high' && m === 'low')
    );
  };

  const allFieldsSelected = toughnessState && scratchResistance && ductilityState && machinabilityState;

  return (
    <>
      <SEO
        title="Search Materials"
        description="Find the perfect construction materials based on toughness, hardness, ductility, and machinability. Get expert material suggestions for your project requirements."
        keywords="material search, toughness, hardness, ductility, machinability, steel types, brass, construction materials finder"
        url="https://thermalstar-materialsuggestor.netlify.app/Searchmaterials"
      />

      <div className="search-materials-page">
        <div className="search-materials-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Material Suggester</span>
            </h1>
            <p className="hero-subtitle">
              Choose the options according to your requirement and experience the magic of Thermal Star!
            </p>
          </div>
        </div>

        <div className="search-materials-container">
          <div className="search-form-card">
            <div className="card-header">
              <div className="header-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18m9-9H3" />
                </svg>
              </div>
              <h2>Select Material Properties</h2>
              <p>Configure your requirements below</p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="toughness">
                  <span className="label-icon">💪</span>
                  Toughness
                </label>
                <div className="select-wrapper">
                  <select
                    id="toughness"
                    className="modern-select"
                    value={toughnessState}
                    onChange={(e) => {
                      setToughnessState(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select Toughness</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="hardness">
                  <span className="label-icon">🔨</span>
                  Hardness
                </label>
                <div className="select-wrapper">
                  <select
                    id="hardness"
                    className="modern-select"
                    value={scratchResistance}
                    onChange={(e) => {
                      setScratchResistanceState(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select Hardness</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="ductility">
                  <span className="label-icon">🔗</span>
                  Ductility
                </label>
                <div className="select-wrapper">
                  <select
                    id="ductility"
                    className="modern-select"
                    value={ductilityState}
                    onChange={(e) => {
                      setDuctilityState(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select Ductility</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <div className="select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="machinability">
                  <span className="label-icon">⚙️</span>
                  Machinability
                </label>
                <div className="select-wrapper">
                  <select
                    id="machinability"
                    className="modern-select"
                    value={machinabilityState}
                    onChange={(e) => {
                      setMachinabilityState(e.target.value);
                      setShowResults(false);
                    }}
                  >
                    <option value="">Select Machinability</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
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
                className={`go-button ${!allFieldsSelected ? 'disabled' : ''} ${isSearching ? 'loading' : ''}`}
                onClick={handleSearch}
                disabled={!allFieldsSelected || isSearching}
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
                Search Results
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
                  <p>We couldn't find any materials matching your selected criteria. Try adjusting your parameters to explore different combinations.</p>
                  <button className="try-again-button" onClick={handleReset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                    Try Different Options
                  </button>
                </div>
              ) : (
                <div className="results-grid">
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'high' && (
                    <MaterialCard
                      title="Cartridge Brass, Admiralty Brass, Muntz Metal & More"
                      materials={["Cartridge Brass", "Admiralty Brass", "Muntz Metal", "416, 430, 416Se, 430F, 301, 303, 303Se Stainless Steels", "Britannia Silver", "Pewter", "Shibuichi", "Spring Steel"]}
                      images={[images.cartidgebrass, images.admbrass, images.muntzmetal]}
                      links={[
                        { url: 'https://www.copper.org/applications/industrial/DesignGuide/selection/brasses02.html', label: 'Cartridge Brass Info' },
                        { url: 'http://ameritube.net/c44300-admiralty-brass/', label: 'Admiralty Brass Info' },
                        { url: 'https://en.wikipedia.org/wiki/Muntz_metal', label: 'Muntz Metal Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="Ni 316 Steel"
                      materials={["Nickel 316 Steel"]}
                      images={[images.nickelsteel]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'low' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Cr 408 Steel"
                      materials={["Chromium 408 Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.hardening-of-stainless-steel.com/materials/chromium-steel/', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'low' && ductilityState === 'medium' && machinabilityState === 'high' && (
                    <MaterialCard
                      title="Cr 409 Steel, Leaded Brass, Britannium"
                      materials={["Cr 409 Steel", "Leaded Brass", "Britannium"]}
                      images={[images.crsteel, images.leadedbrass, images.britmetal]}
                      links={[
                        { url: 'https://www.azom.com/article.aspx?ArticleID=969', label: 'Cr 409 Steel Info' },
                        { url: 'https://www.avivametals.com/collections/leaded-brass', label: 'Leaded Brass Info' },
                        { url: 'https://en.wikipedia.org/wiki/Britannia_metal', label: 'Britannium Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Cr 410 Steel, 403, 410, 414 Stainless Steels"
                      materials={["Cr 410 Steel", "403 Stainless Steel", "410 Stainless Steel", "414 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[
                        { url: 'https://www.sandmeyersteel.com/410.html', label: '410 Steel Info' },
                        { url: 'https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/', label: '400 Series Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'low' && ductilityState === 'medium' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="446 Stainless Steel"
                      materials={["446 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="Zamak, 442, 202 Stainless Steels"
                      materials={["Zamak", "442 Stainless Steel", "202 Stainless Steel"]}
                      images={[images.Zamak, images.crsteel]}
                      links={[
                        { url: 'https://en.wikipedia.org/wiki/Zamak', label: 'Zamak Info' },
                        { url: 'https://www.azom.com/article.aspx?ArticleID=8274', label: '442 Steel Info' },
                        { url: 'https://www.azom.com/article.aspx?ArticleID=8209', label: '202 Steel Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'high' && ductilityState === 'medium' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="440B, 420, 302 Stainless Steel"
                      materials={["440B Stainless Steel", "420 Stainless Steel", "302 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[
                        { url: 'https://www.azom.com/article.aspx?ArticleID=6816', label: '440B Info' },
                        { url: 'https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/420-stainless-steel/', label: '420 Info' },
                        { url: 'https://www.azom.com/article.aspx?ArticleID=8197', label: '302 Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'low' && scratchResistance === 'high' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="440C Steel"
                      materials={["440C Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://matmatch.com/learn/material/440c-stainless-steel', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="431 Stainless Steel"
                      materials={["431 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.azom.com/article.aspx?ArticleID=1023', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'high' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="440A Stainless Steel"
                      materials={["440A Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.univstainless.com/440a/', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'high' && (
                    <MaterialCard
                      title="Brass, Billon, Sterling Silver, 303Se Stainless Steel"
                      materials={["Brass", "Billon", "Sterling Silver", "303Se Stainless Steel"]}
                      images={[images.brass, images.billon, images.sterlingsilver]}
                      links={[
                        { url: 'https://en.wikipedia.org/wiki/Brass', label: 'Brass Info' },
                        { url: 'https://en.wikipedia.org/wiki/Billon_(alloy)', label: 'Billon Info' },
                        { url: 'https://en.wikipedia.org/wiki/Sterling_silver', label: 'Sterling Silver Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="302B, 304 Stainless Steels"
                      materials={["302B Stainless Steel", "304 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[
                        { url: 'https://www.azom.com/article.aspx?ArticleID=8196', label: '302B Info' },
                        { url: 'https://en.wikipedia.org/wiki/SAE_304_stainless_steel', label: '304 Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="201 Stainless Steel"
                      materials={["201 Stainless Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.thoughtco.com/type-201-stainless-steel-2340260', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'high' && (
                    <MaterialCard
                      title="Electrum, 6Al-4v, 430Se Stainless Steel"
                      materials={["Electrum", "6Al-4v Titanium", "430Se Stainless Steel"]}
                      images={[images.electrum, images.crsteel]}
                      links={[
                        { url: 'https://en.wikipedia.org/wiki/Electrum', label: 'Electrum Info' },
                        { url: 'https://en.wikipedia.org/wiki/Ti-6Al-4V', label: 'Ti-6Al-4V Info' },
                        { url: 'http://www.sunmach.net/Alloys/Stainless-Steel-430-or-430F-or-430F-SE-Manufacturers.html', label: '430Se Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'low' && ductilityState === 'medium' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Solder"
                      materials={["Solder"]}
                      images={[images.solder]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Solder', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'low' && scratchResistance === 'high' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="Iridium, Osmium, Rhodium-Platinum Alloy"
                      materials={["Iridium", "Osmium", "Rhodium-Platinum Alloy"]}
                      images={[images.Iridium, images.Osmium]}
                      links={[
                        { url: 'https://en.wikipedia.org/wiki/Iridium', label: 'Iridium Info' },
                        { url: 'https://en.wikipedia.org/wiki/Osmium', label: 'Osmium Info' },
                        { url: 'https://technology.matthey.com/article/5/2/58-65/', label: 'Rh-Pt Alloy Info' }
                      ]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Hadfield Steel"
                      materials={["Hadfield Steel (Mangalloy)"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Mangalloy', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'low' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Ball Bearing Steel"
                      materials={["Ball Bearing Steel"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Ball_(bearing)', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'medium' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="Rhodium-Palladium Alloy"
                      materials={["Rhodium-Palladium Alloy"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.nature.com/articles/180334a0', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'medium' && scratchResistance === 'low' && ductilityState === 'medium' && machinabilityState === 'high' && (
                    <MaterialCard
                      title="Pseudo Palladium"
                      materials={["Pseudo Palladium (RhAg)"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Pseudo_palladium', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'low' && scratchResistance === 'high' && ductilityState === 'medium' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Ruthenium"
                      materials={["Ruthenium"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://en.wikipedia.org/wiki/Ruthenium', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'high' && scratchResistance === 'medium' && ductilityState === 'medium' && machinabilityState === 'medium' && (
                    <MaterialCard
                      title="Ti Beta-C"
                      materials={["Ti Beta-C Titanium Alloy"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.matweb.com/search/datasheet_print.aspx?matguid=1366b26eea18429eb7be04e08d5f6636', label: 'Learn More' }]}
                    />
                  )}
                  {toughnessState === 'low' && scratchResistance === 'high' && ductilityState === 'high' && machinabilityState === 'low' && (
                    <MaterialCard
                      title="Stellite"
                      materials={["Stellite Alloy"]}
                      images={[images.crsteel]}
                      links={[{ url: 'https://www.hardening-of-stainless-steel.com/materials/chromium-steel/', label: 'Learn More' }]}
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
const MaterialCard = ({ title, materials, images: materialImages, links }) => (
  <div className="material-card">
    <div className="card-image-section">
      {materialImages && materialImages.slice(0, 1).map((img, index) => (
        <img key={index} src={img} alt={title} className="material-image" />
      ))}
    </div>
    <div className="card-content">
      <h4 className="material-title">{title}</h4>
      <div className="material-tags">
        {materials.map((material, index) => (
          <span key={index} className="material-tag">{material}</span>
        ))}
      </div>
      <div className="card-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-link"
          >
            {link.label}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Searchmaterials;