import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn } from 'redux/Auth/authSelector';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location.state?.from ?? '/'} />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
