import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]); // Re-check on route change

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setToggle(false);
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/Searchmaterials', label: 'Search Materials' },
    { path: '/Application', label: 'By Application' },
    { path: '/Choose', label: 'Choose' },
    { path: '/About_m', label: 'About' },
    { path: '/Contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo - Left */}
        <Link to='/' className='navbar__logo'>
          <img src={images.logo} alt="ThermalStar Logo" />
          <span className="navbar__logo-text">ThermalStar</span>
        </Link>

        {/* Desktop Navigation - Center */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Right (Login or Logout based on auth state) */}
        <div className="navbar__cta">
          {user ? (
            <div className="navbar__user">
              {user.picture && (
                <img src={user.picture} alt={user.name} className="navbar__user-avatar" />
              )}
              <button onClick={handleLogout} className="navbar__logout-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          ) : (
            <Link to='/Login' className="navbar__cta-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setToggle(true)}
          aria-label="Open menu"
        >
          <HiMenuAlt4 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <div className="mobile-overlay" onClick={() => setToggle(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${toggle ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">Menu</span>
          <button
            className="mobile-menu__close"
            onClick={() => setToggle(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-menu__link ${isActive(link.path) ? 'mobile-menu__link--active' : ''}`}
              onClick={() => setToggle(false)}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="mobile-menu__logout"
            >
              Logout
            </button>
          ) : (
            <Link
              to='/Login'
              className="mobile-menu__login"
              onClick={() => setToggle(false)}
            >
              Login
            </Link>
          )}
        </nav>

        <div className="mobile-menu__footer">
          {user && (
            <p className="mobile-menu__user-info">
              Signed in as {user.name || user.email}
            </p>
          )}
          <p>© 2024 ThermalStar</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;