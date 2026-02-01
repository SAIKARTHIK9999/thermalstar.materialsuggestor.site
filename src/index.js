import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

// Google OAuth Client ID
const GOOGLE_CLIENT_ID = '1084206037250-eil310g25pjf9bmmkpi6shc1o8mairm7.apps.googleusercontent.com';

ReactDOM.render(
    <HelmetProvider>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GoogleOAuthProvider>
    </HelmetProvider>,
    document.getElementById('root'));