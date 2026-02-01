import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Login.scss';

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      // Decode the JWT to get user info
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google Login Success:', decoded);

      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        sub: decoded.sub
      }));

      // Navigate to Choose page
      navigate('/Choose');
    } catch (error) {
      console.error('Error decoding token:', error);
      setError("Failed to process Google login");
    }
  };

  const handleGoogleError = () => {
    setError("Google Sign In failed. Please try again.");
  };

  return (
    <>
      <Helmet>
        <title>Login | ThermalStar Material Suggestor</title>
        <meta name="description" content="Login to access ThermalStar Material Suggestor" />
      </Helmet>

      <section className="login-page">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="login-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>

          <div className="login-card__header">
            <h1 className="login-card__title">Welcome</h1>
            <p className="login-card__subtitle">Sign in with your Google account to continue</p>
          </div>

          {error && (
            <div className="login-card__error">
              {error}
            </div>
          )}

          <div className="login-card__google">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              type="standard"
              theme="outline"
              size="large"
              text="signin_with"
              shape="rectangular"
              width="300"
            />
          </div>

          <p className="login-card__footer">
            By signing in, you agree to our Terms of Service
          </p>
        </motion.div>
      </section>
    </>
  );
}