import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Favoritos from '../../page-favoritos/Favoritos'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/favoritos' element={<Favoritos/>}/>
    </Routes>
    </BrowserRouter>

    )
}

