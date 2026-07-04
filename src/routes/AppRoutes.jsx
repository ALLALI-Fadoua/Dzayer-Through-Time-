import { Routes, Route } from "react-router-dom";
import VisitorRoutes from "./VisitorRoutes";
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<VisitorRoutes />} />
    </Routes>
  );
}
