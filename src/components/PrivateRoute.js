import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check for the token

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/auth/login" />;
  }

  // If token exists, allow access to the route
  return children;
};

export default PrivateRoute;
