import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Footer from "../components/layout/Footer/Footer";

export const RouterPrincipal = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
