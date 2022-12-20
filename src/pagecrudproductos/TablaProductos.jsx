import React from 'react'
import { Button } from 'react-bootstrap'
import  Table  from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

const TablaProductos = ({productos, loading}) => {
    if(loading) {
        return (<h1>Loading</h1>)
    }

  return (
    <div className='tabla-de-productos my-3'>
         <Table striped bordered hover className='text-center tabla-de-productos'>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Marca</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
            <tr key={index}>
                <td>{producto.id}</td>
                <td>{producto.title}</td>
                <td>{producto.id} {producto.id}</td>
                <td>{producto.title}</td>
                <td>{producto.title}</td>
                <td>{producto.title}</td>
                <td><div className='d-flex'><Button className='mx-1'>E</Button><Link to={`/admin-productos/editar/${producto.id}`}><Button className='mx-1'>U</Button></Link></div></td>
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default TablaProductos