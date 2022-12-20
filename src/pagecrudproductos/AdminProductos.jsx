import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import TablaProductos from "./TablaProductos";


const AdminProductos = () => {
    const [totalProductos, setTotalProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchPosts();
      }, []);
    
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        setTotalProductos(res.data);
        setLoading(false);
      };

      const handleSubmitProducto = (e) => {
        e.preventDefault()
        let codigoProducto = e.target.codigoProducto.value;
        let nombreProducto = e.target.nombreProducto.value;
        let marcaProducto = e.target.marcaProducto.value;
        let stockProducto = e.target.stockProducto.value;
        let precioProducto = e.target.precioProducto.value;
        let categoriaProducto = e.target.categoriaProducto.value;
        let urlProducto = e.target.urlProducto.value;
        let descripcionProducto = e.target.descripcionProducto.value
        
        const nuevoProducto = {
            codigoProducto,
            nombreProducto,
            marcaProducto,
            stockProducto,
            precioProducto,
            categoriaProducto,
            urlProducto,
            descripcionProducto
        }

        console.log(nuevoProducto)
      }

  return (
    <div className='container d-flex flex-column'>
        <h1 className='text-center'>Administrar Productos</h1>
        <hr/>
        <div className="d-flex justify-content-center">
        <Form className="col-11 col-md-8" onSubmit={handleSubmitProducto}>
        <Form.Label>Codigo</Form.Label>
        <Form.Control type="text" name="codigoProducto" placeholder="El codigo se genera de manera automatica" className="mb-3" disabled={true} value={Date.now()}/>
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" name="nombreProducto" placeholder="PC Gamer" className="mb-3"/>
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" name="marcaProducto" placeholder="Sony" className="mb-3"/>
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" name="stockProducto" placeholder="24" className="mb-3"/>
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" name="precioProducto" placeholder="24.499" className="mb-3"/>
        <Form.Label>Categoria</Form.Label>
        <Form.Select defaultValue="Seleccione categoria" name="categoriaProducto">
        <option  disabled={true}>Seleccione categoria</option>
        <option>Electrodomesticos</option>
        <option>Computacion</option>
        <option>Aire Libre</option>
        </Form.Select>
        <Form.Label>URL imagen producto</Form.Label>
        <Form.Control type="text" name="urlProducto" placeholder="http://" className="mb-3"/>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" name="descripcionProducto" rows={3} placeholder="Descripcion" className="mb-1"/>
      <Button variant="primary" type="submit" className="my-3">
        Submit
      </Button>
    </Form>
        </div>
        <hr/>
    <div>
        <TablaProductos productos={totalProductos} loading={loading}/>
    </div>
    </div>
  )
}

export default AdminProductos