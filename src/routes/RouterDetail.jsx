import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "../assets/components/Detail";
import { App } from "../pages/App";

export const RouterDetail = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
