import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Destacados from '../page-destacados/Destacados'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/destacados' element={<Destacados/>}/>
    </Routes>
    </BrowserRouter>

    )
}

