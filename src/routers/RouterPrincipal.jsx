import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Login from '../components/layout/Home/login/Login'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>

    )
}

