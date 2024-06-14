import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Caragiver from "../pages/Caragivers";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Client from "../pages/Client";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cuidador" element={
        <ProtectedLayout requiredRole="caregiver">
          <Caragiver />
        </ProtectedLayout>
      } />

      <Route path="/usuario" element={
        <ProtectedLayout requiredRole="client">
          <Client />
        </ProtectedLayout>
      } />

      <Route path="/cadastro" element={<Register />} />

    </Routes >
  );
}
