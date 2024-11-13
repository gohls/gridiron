import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;