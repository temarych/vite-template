import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '@config/routes';
import { selectIsAuthenticated } from '@store/features/auth';

export const AuthGuard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (!isAuthenticated) return <Navigate to={routes.login()} />;
  return <Outlet />;
};
