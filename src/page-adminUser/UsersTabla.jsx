import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import React from 'react'

const UsersTabla = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }

  return (
    <div className="d-flex w-100">
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Activo</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {posts.map((product, index) =>(<tr key={index}>
        <td className="col-2 text-center td-favoritos">{product.title}</td>
        <td className="col-4 text-center td-favoritos">{product.title}</td>
        <td className="col-3 text-center td-favoritos">{product.id}</td>
        <td className="col-2 text-center td-favoritos">{product.userId}</td>
        <td className="col-1 text-center td-favoritos"><Button variant="danger">X</Button></td>
      </tr>))}
          </tbody>
        </Table>
        </div>
  )
}

export default UsersTabla