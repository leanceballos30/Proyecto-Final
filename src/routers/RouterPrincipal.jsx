import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../components/view/home/Home";

export const RouterPrincipal = () => {

  const url = "http://localhost:3001/productos";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const resp = await fetch(url);
      const productosApi = await resp.json();
      setProducts(productosApi);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products = {products} />} />
      </Routes>
    </BrowserRouter>
  );
};
