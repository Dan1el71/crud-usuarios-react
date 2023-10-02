/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children, isAllowed }) => {
  if (!isAllowed) return <Navigate to="/login" />
  return children ? <>{children}</> : <Outlet />
}
