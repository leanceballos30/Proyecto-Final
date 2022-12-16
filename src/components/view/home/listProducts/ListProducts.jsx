import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import Container from "react-bootstrap/Container";

const ListProducts = ({ products }) => {
  return (
    <>
      {products.map((p, index) => (
        // <Col key={index}>
        <ProductCard key={index} p={p} />
        // </Col>
      ))}
    </>
  );
};

export default ListProducts;
