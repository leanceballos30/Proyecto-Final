import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsSuitHeartFill } from "react-icons/bs";
import "./productCard.css"


const ProductCard = ({p}) => {
  return (
    <Card className="shadow-lg border">
      <div>
        <Card.Img
          className="card-img border-bottom "
          variant="top"
          src={p.imagen}
        />
        <Card.Title className="text-white title-precio rounded">
          ${p.precio}
        </Card.Title>
        <Button variant="primary" className="boton-favorito">
          <BsSuitHeartFill />
        </Button>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="">
          <div className="d-flex justify-content-between container p-0">
            <Card.Title className="text-dark">{p.titulo}</Card.Title>
          </div>
          {/* <p className="bg-primary bg-opacity-10 rounded descripcion-card-producto">
           
          </p> */}
        </div>
        {/* <div className="d-flex justify-content-around">
          <Button variant="success" className="opacity-75 w-25 fs-3"> */}
            {/* <MdShoppingCart /> */}
          {/* </Button>
          <Button variant="warning" className="opacity-75 fs-4">
            Comprar
          </Button>
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
