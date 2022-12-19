import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Electrodomesticos from '../pageCategorias/Electrodomesticos'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/electrodomesticos' element={<Electrodomesticos/>}/>
    </Routes>
    </BrowserRouter>

    )
}

