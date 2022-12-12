import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Contacto from '../pages/Contacto'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/contacto' element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>

    )
}

