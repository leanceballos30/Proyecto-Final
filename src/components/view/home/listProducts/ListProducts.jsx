import React from 'react'
import { Col } from 'react-bootstrap';
import ProductCard from '../productCard/ProductCard'

const ListProducts = ({products}) => {
 
  return (
    <>
    {
      products.map((p) => {
        <Col  lg={3} md={4}>
            <ProductCard p={p}/>
        </Col>
        
      })
    }
    </>
  )
}

export default ListProducts