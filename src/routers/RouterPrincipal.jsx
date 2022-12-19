import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Electrodomesticos from '../pageCategorias/Electrodomesticos'
import Computacion from '../pageCategorias/computacion/Computacion'
import AireLibre from '../pageCategorias/aireLibre/AireLibre'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/electrodomesticos' element={<Electrodomesticos/>}/>
        <Route exact path='/computacion' element={<Computacion/>}/>
        <Route exact path='/aire-libre' element={<AireLibre/>}/>
    </Routes>
    </BrowserRouter>

    )
}

