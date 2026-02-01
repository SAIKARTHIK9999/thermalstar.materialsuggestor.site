import React from 'react';
import { Navigate } from 'react-router-dom';

// Protected Route Component - redirects to Login if not authenticated
const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem('user');

    if (!user) {
        // Redirect to login page if not authenticated
        return <Navigate to="/Login" replace />;
    }

    return children;
};

export default ProtectedRoute;
