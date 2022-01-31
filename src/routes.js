import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import PageNotFound from "./pages/pageNotFound";
import RegisterPage from "./pages/registerPage";
import DashboardPage from "./pages/dashboardPage";
import RequestsPage from "./pages/requestsPage";
import LandlordsPage from "./pages/landlordsPage";
import TenantsPage from "./pages/tenantsPage";

const BaseRouter = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/requests" element={<RequestsPage />} />
      <Route path="/landlords" element={<LandlordsPage />} />
      <Route path="/tenants" element={<TenantsPage />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default BaseRouter;
