import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Destacados = () => {
    const cantidad = [1, 2, 3, 4, 5, 6]
  return (
    <div className='d-flex'>
    <div className='container col-12 col-md-9'>
        <h1 className='my-3'>Productos Destacados</h1>
        <hr/>
        <Row className="g-4">
      {cantidad.map((_, idx) => (
        <Col xs={12} sm={6} md={4} key={idx}>
          <Card>
            <div>
            <Card.Img className='border-bottom' variant="top" src="https://as01.epimg.net/meristation/imagenes/2021/07/15/mexico/1626328445_984933_1626329813_sumario_normal.jpg" />
            <Card.Title className='text-white title-precio rounded'>$18.999</Card.Title>
            </div>
            <Card.Body className='d-flex justify-content-around'>
                <div className=''>
                    <div className='d-flex justify-content-between container'>
              <Card.Title className='text-primary'>Card title</Card.Title>
              
              </div>
              <p className='bg-primary bg-opacity-10 rounded descripcion-card-producto'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              </div>
              <div className='d-flex flex-column justify-content-around container'>
                <Button variant='primary' className='opacity-75'>Favorito</Button>
                <Button variant='success' className='opacity-75'>Carrito</Button>
                <Button variant='warning' className='opacity-75'>Comprar</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <h1 className='col-md-3 d-none d-md-block text-center align-self-center'>Side</h1>
    </div>
  )
}

export default Destacados