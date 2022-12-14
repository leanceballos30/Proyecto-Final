import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

export const RouterPrincipal = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
