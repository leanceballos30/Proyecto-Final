import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import publicidad from "../../../assets/img/main/publicidad.jpg";
import CarouselHome from "./carouselHome/carouselHome";
import ListProducts from "./listProducts/ListProducts";
import ProductCard from "./productCard/ProductCard";

const Home = () => {

  const url =   "http://localhost:3001/productos"


  const [products, setProducts] = useState([])


  useEffect(() => {
    getApi()
  
  }, [])
  


  const getApi = async () => {
    try {
      const resp = await fetch(url);
      const productosApi = await resp.json();
      setProducts(productosApi)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <CarouselHome />
      <div className="vh-100">
        <Row className="mx-0">
          <h2 className="fw-bold mt-2 border d-flex  align-items-center">Nuestros productos destacados</h2>
          <Col className="mt-4" lg={10}>
              <ListProducts products={products} />
          </Col>
          <Col lg={2} className="d-none d-lg-inline publicidad  vh-100  ">
            <img
              className="publicidad-img w-100 h-100"
              src={publicidad}
              alt="publicidad_intel"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
