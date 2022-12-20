import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import AdminProductos from '../pagecrudproductos/AdminProductos'
import EditarProducto from '../pagecrudproductos/EditarProducto'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/admin-productos' element={<AdminProductos/>}/>
        <Route exact path='/admin-productos/editar/:id' element={<EditarProducto/>}/>
    </Routes>
    </BrowserRouter>

    )
}

