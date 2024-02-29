import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export interface IProtectedRouteProps {
  children?: ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute(props: IProtectedRouteProps) {
  const to = props.redirectTo ? props.redirectTo : '/';
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to={to} />;
  }

  return props.children ? props.children : <Outlet />;
}
