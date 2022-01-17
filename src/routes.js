/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import PageNotFound from "./pages/pageNotFound";

const BaseRouter = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default BaseRouter;
