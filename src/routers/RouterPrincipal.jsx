import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import Registration from '../components/layout/Home/registration/Registration'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/registration" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>

    )
}

