import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
