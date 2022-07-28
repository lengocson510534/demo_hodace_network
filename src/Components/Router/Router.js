import React from "react";
import { Route, Routes } from "react-router-dom";
import StatisticsPage from "../Layout/StatisticsPage";
import PhonePage from "../Layout/PhonePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/phone" element={<PhonePage />} />
    </Routes>
  );
};

export default Router;
