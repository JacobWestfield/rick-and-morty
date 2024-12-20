import React, { FC } from "react";
import { useAuth } from "../context/AuthProvider.tsx";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute: FC = ({ children }) => {
  const user = useAuth();
  const location = useLocation();

  if (user === null) {
    return (
      <Navigate to="/signin" state={{ from: location.pathname }} replace />
    );
  }

  return children;
};
