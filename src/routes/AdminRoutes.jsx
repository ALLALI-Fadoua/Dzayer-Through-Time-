import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Years from "../pages/admin/Years";
import HistoricalEvents from "../pages/admin/HistoricalEvents";
import GalleryManager from "../pages/admin/GalleryManager";
import StatisticsManager from "../pages/admin/StatisticsManager";
import WilayaManager from "../pages/admin/WilayaManager";
import Settings from "../pages/admin/Settings";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <div className="flex-1 p-6 lg:p-10 overflow-x-hidden">{children}</div>
    </div>
  );
}

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout><Dashboard /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="years"
        element={
          <ProtectedRoute>
            <AdminLayout><Years /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="events"
        element={
          <ProtectedRoute>
            <AdminLayout><HistoricalEvents /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="gallery"
        element={
          <ProtectedRoute>
            <AdminLayout><GalleryManager /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="statistics"
        element={
          <ProtectedRoute>
            <AdminLayout><StatisticsManager /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="wilayas"
        element={
          <ProtectedRoute>
            <AdminLayout><WilayaManager /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <AdminLayout><Settings /></AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}
