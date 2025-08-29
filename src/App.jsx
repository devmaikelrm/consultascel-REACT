import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

// Páginas
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecoveryPage from "./pages/RecoveryPage";
import DashboardPage from "./pages/DashboardPage";
import RevisarPage from "./pages/RevisarPage";
import SubirPage from "./pages/SubirPage";
import HomePage from "./pages/HomePage";

// Contexto Auth
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Rutas protegidas
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/revisar"
            element={
              <ProtectedRoute>
                <RevisarPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subir"
            element={
              <ProtectedRoute>
                <SubirPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
