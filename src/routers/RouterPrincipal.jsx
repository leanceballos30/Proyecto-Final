import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Destacados from '../page-destacados/Destacados'
import DestacadosTest from '../page-destacados/DestacadosTest'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/destacados' element={<Destacados/>}/>
        <Route exact path='/destacados-test' element={<DestacadosTest/>}/>
    </Routes>
    </BrowserRouter>

    )
}

